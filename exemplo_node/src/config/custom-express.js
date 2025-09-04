const express = require("express");

const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname,  "../public")));

const routes = require("../app/routes");

app.use("/", routes);

module.exports = app;
