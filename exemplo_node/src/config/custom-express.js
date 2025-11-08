
const express = require("express");

const app = express();

const ejs = require("ejs");

const path = require("path");

app.use(express.static(path.join(__dirname, "../public")));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "app", "views"));

const routes = require("../app/routes");
const routes_exercs = require("../app/routes/exercicios");
const professor_routes = require('../app/routes/professor')

app.use("/", routes);
app.use("/exercicios", routes_exercs)
app.use('/professor', professor_routes)

module.exports = app;
