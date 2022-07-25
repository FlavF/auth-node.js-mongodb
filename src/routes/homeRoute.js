 //?Libraries
const express = require("express");
//?Controllers
const userController = require("../controllers/user")
//?Create Router
const router = new express.Router();
//? Middleware
const auth = require("../middleware/auth");

//?? ROUTERS USERS
//** Homepage  = Log in */
//? Show page log in
router.get("/", userController.getHomepage)

//? Authentification
router.post("/", userController.checkAuth);

//** Sign in */
//?Show page sign in
router.get("/signin", userController.getSignIn);

//?Create a new user
router.post("/signin", userController.createNewUser);

//** Log out */
//? To log out if log in on different pc
router.post("/logout", auth, userController.logOut);

//? Log all out
router.post("/logoutAll", auth, userController.logAllOut);


module.exports = router;


