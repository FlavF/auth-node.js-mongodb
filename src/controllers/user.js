//? Modules
const User = require("../models/user");

//? For Routes
//? Set the homepage 
exports.getHomepage = (req, res, next) => {
	res.render("pages/homepage");
};

//? Create new user
exports.createNewUser = async (req, res, next) => {
	//? get the new datas sent
	const user = new User(req.body);
	//? save the new user in the database
	try {
		await user.save();
		//? create token
		const token = await user.generateAuthToken();
		//? page status
		res.status(201).send({ user, token });
		res.render("pages/logIn");
	} catch (e) {
		res.status(400).send(e);
	}
};


//? Check If email and password are in the database
exports.checkAuth = async (req, res, next) => {
	try {
		const user = await User.findByCredentials(
			req.body.email,
			req.body.password
		);
		const token = await user.generateAuthToken();
		res.send({ user, token });
		res.render("pages/logIn");
	} catch (e) {
		res.status(400).send();
	}
};


// ? Log out
exports.logOut = async (req, res, next) => {
	try {
		req.user.tokens = req.user.tokens.filter((token) => {
			return token.token !== req.token;
		});
		await req.user.save();
		res.send();
		res.render("pages/logOut");
	} catch (e) {
		res.status(500).send();
	}
};



