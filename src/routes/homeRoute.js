 //?Libraries
const express = require("express");
//?Controllers
const userController = require("../controllers/user")
//?Create Router
const router = new express.Router();
//? Middleware
const auth = require("../middleware/auth");

//?? ROUTERS USERS
//** Homepage  = Log in & sign in */
//? Show page homePage
router.get("/", userController.getHomepage)

//** Sign in */
//?Create a new user
router.post("/signin", userController.createNewUser);

//** Log in */
//? Authentification
router.post("/login", userController.checkAuth);

//** Log out */
//? To log out if log in on different pc
router.post("/logout", auth, userController.logOut);


module.exports = router;


