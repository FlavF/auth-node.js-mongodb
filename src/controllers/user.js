//? Modules
const User = require("../models/user");

//? For Routes
//? Set the homepage / Log in
exports.getHomepage = (req, res) => {
	res.render("pages/login");
};

//? Check If email and password are in the database
exports.checkAuth = async (req, res) => {
	try {
		const user = await User.findByCredentials(
			req.body.email,
			req.body.password
		);
		const token = await user.generateAuthToken();
		res.send({ user, token });
		res.render("pages/loggedin");
	} catch (e) {
		res.status(400).send();
	}
};

//? Set the Sign in page
exports.getSignIn = (req, res) =>{
	res.render("pages/signin")
}

//? Create new user
exports.createNewUser = async (req, res) => {
	//? get the new datas sent
	const user = new User(req.body);
	//? save the new user in the database
	try {
		await user.save();
		//? create token
		const token = await user.generateAuthToken();
		//? page status
		res.status(201).send({ user, token });
		res.render("pages/loggedin");
	} catch (e) {
		res.status(400).send(e);
	}
};


// ? Log out
exports.logOut = async (req, res) => {
	try {
		req.user.tokens = req.user.tokens.filter((token) => {
			return token.token !== req.token;
		});
		await req.user.save();
		res.send();
		res.render("pages/loggedout");
	} catch (e) {
		res.status(500).send();
	}
};

//? Log all out
exports.logAllOut = async (req, res) => {
	try {
		req.user.tokens = [];
		await req.user.save();
		res.status(200).send("Your are logout");
        res.render("/pages/loggedout");
	} catch (e) {
		res.status(500).send();
	}
};

