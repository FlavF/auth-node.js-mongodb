const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//?to help with password hashed
const userSchema = new mongoose.Schema({
    email: {
        unique: true,
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid");
            }
        },
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes("password")) {
                throw new Error("password is not a password");
            }
        },
    },
    tokens: [{
        token: {
            type: String,
            required: true
        },
    }],
}, {
    timestamps: true
})


//? To do public profile
userSchema.methods.toJSON = function(){
    const user = this
    const userObject = user.toObject()
    
    //? To no show the password hashed and the token
    delete userObject.password
    delete userObject.tokens
    
    return userObject
}

//? create a token
userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET)
    
    //? stock in the database the new token
    user.tokens = user.tokens.concat({ token })
    await user.save()
    
    return token
}

//? Check the email and check if password is reconize
userSchema.statics.findByCredentials = async (email, password) => {
    //? find email by the email
    const user = await User.findOne({email})
    if (!user){
        throw new Error("Unable to login")
    }
    //? Check is email given and in the database are the same
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch){
        throw new Error("Unable to login")
        //* is better not to be precise to avoid hacker
    }
    return user
}

//? Hash plain before saving
userSchema.pre('save', async function (next){
    const user = this
    //? to verify if the password is modified
    if (user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})


//? User Model
const User = mongoose.model("User", userSchema)

module.exports = User
