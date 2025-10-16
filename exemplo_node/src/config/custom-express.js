//chamo o express por meio do require e armazeno em uma express
const express = require("express");

const app = express();

const ejs = require("ejs");

const path = require("path");

app.use(express.static(path.join(__dirname, "../public")));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "..", "app", "views"));

const routes = require("../app/routes");

app.use("/", routes);

module.exports = app;
