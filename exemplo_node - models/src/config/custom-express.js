//chamo o express por meio do require e armazeno em uma express
const express = require("express");

const app = express();

const ejs = require("ejs");

const path = require("path");

app.use(express.static(path.join(__dirname, "../public")));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "..", "app", "views"));



const routes = require("../app/routes");
const routes_exercs = require("../app/routes/exercicios");

app.use(express.urlencoded({extended: true}))
app.use("/", routes);
app.use("/exercicios", routes_exercs)
module.exports = app;
