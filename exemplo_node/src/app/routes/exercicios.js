const routes = require("express").Router();

const ex3 = require("../controller/ex3");
const ex1EJSRefatorado = require("../controller/ex1EJSController_refatorado");
const ex2EJSRefatorado = require("../controller/ex2EJSController_refatorado");
const ex4EJSRefatorado = require("../controller/ex4EJSController_refatorado");
const ex5EJSRefatorado = require("../controller/ex5EJSController_refatorado");
const ex6EJSRefatorado = require("../controller/ex6EJSController_refatorado");



routes.get("/ex1", ex1EJSRefatorado.mostrar);
routes.get("/ex2", ex2EJSRefatorado.mostrar);
routes.get("/ex3", ex3);
routes.get("/ex4", ex4EJSRefatorado.mostrar);
routes.get("/ex5", ex5EJSRefatorado.mostrar);
routes.get("/ex6", ex6EJSRefatorado.mostrar);

routes.get("/ex1/calcular", ex1EJSRefatorado.calcular);
routes.get("/ex2/calcular", ex2EJSRefatorado.calcular);
routes.get("/ex4/calcular", ex4EJSRefatorado.calcular);
routes.get("/ex5/calcular", ex5EJSRefatorado.calcular);
routes.get("/ex6/calcular", ex6EJSRefatorado.calcular);

module.exports = routes;
