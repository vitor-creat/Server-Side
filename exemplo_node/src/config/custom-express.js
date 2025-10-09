//chamo o express por meio do require e armazeno em uma express
const express = require("express");

//chamo a função express e coloco na constante app
const app = express();

// não sei  
const path = require("path");

app.use(express.static(path.join(__dirname,  "../public")));

const routes = require("../app/routes");

app.use("/", routes);

module.exports = app;
