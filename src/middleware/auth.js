const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
	try {
		//?take the token from the header
		const token = req.header("Authorization").replace("Bearer ", "");
		//? Code the token header to be the same format than the token already stocked
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		//? Check if find the user token and if the same than the token header
		const user = await User.findOne({
			_id: decoded._id,
			"tokens.token": token,
		});

		if (!user) {
			throw new Error();
		}
		//?to have access
		req.token = token;
		req.user = user;
		next();
	} catch (e) {
		res.status(401).send({ error: "Please authenticate." });
	}
};

module.exports = auth;
