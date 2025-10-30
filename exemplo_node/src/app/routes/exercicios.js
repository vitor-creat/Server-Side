const routes = require("express").Router();

const getExercicios = require("../controller/exercicios");
const getExercicio_estatico = require("../controller/getExercicio");

const ex1 = require("../controller/ex1");
const ex2 = require("../controller/ex2");
const ex3 = require("../controller/ex3");
const ex4 = require("../controller/ex4");
const ex5 = require("../controller/ex5");
const ex6 = require("../controller/ex6");

const ex1QueryController = require("../controller/ex1QueryController");
const ex2QueryController = require("../controller/ex2QueryController");
const ex4QueryController = require("../controller/ex4QueryController");
const ex5QueryController = require("../controller/ex5QueryController");
const ex6QueryController = require("../controller/ex6QueryController");

const ex1EJSHome = require("../controller/ex1EJSController_home");
const ex1EJSCalc = require("../controller/ex1EJSController_calcular");
const ex1EJSRefatorado = require("../controller/ex1EJSController_refatorado");

routes.get("/exercicios", getExercicios);
routes.get("/exercicios_estaticos", getExercicio_estatico);

routes.get("/ex1", ex1);
routes.get("/ex2", ex2);
routes.get("/ex3", ex3);
routes.get("/ex4", ex4);
routes.get("/ex5", ex5);
routes.get("/ex6", ex6);

//Rotas do resultado dos exercicios
routes.get("/ex1/mostrar", ex1QueryController);
routes.get("/ex2/mostrar", ex2QueryController);
routes.get("/ex4/mostrar", ex4QueryController);
routes.get("/ex5/mostrar", ex5QueryController);
routes.get("/ex6/mostrar", ex6QueryController);

routes.get("/ex1_ejs", ex1EJSHome);
routes.get("ex1_ejs/calcular", ex1EJSCalc);

routes.get("/ex1_ejs_refatorado", ex1EJSRefatorado.mostrar);
routes.get("/ex1_ejs_refatorado/calcular", ex1EJSRefatorado.calcular);

module.exports = routes;
