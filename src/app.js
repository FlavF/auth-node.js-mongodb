//? Modules
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const ejs = require("ejs");

//? DATABASE Setup
require("./db/db");

//? Setup
const app = express();

//? Get Controllers
const errorController = require("./controllers/error")

//? Get Routers
const homeRouter = require("./routes/homeRoute");

//? Paths
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "views");

//? Set views with EJS View Engine
app.set("views", viewsPath);
app.set("view engine", "ejs");

//? customize the server (CSS, JS, Images, ...)
app.use(express.static(publicDirectoryPath));

//? use the modules
app.unsubscribe(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // parsing incoming

//?Call Routers
app.use(homeRouter);
app.use(errorController.getError404);

module.exports = app;