const routes = require("express").Router();

// // const getExercicios = require("../controller/exercicios");
// const getExercicio_estatico = require("../controller/getExercicio");
const ex3 = require("../controller/ex3");
const ex1EJSRefatorado = require("../controller/ex1EJSController_refatorado");
const ex2EJSRefatorado = require("../controller/ex2EJSController_refatorado");
const ex4EJSRefatorado = require("../controller/ex4EJSController_refatorado");
const ex5EJSRefatorado = require("../controller/ex5EJSController_refatorado");
const ex6EJSRefatorado = require("../controller/ex6EJSController_refatorado");


// routes.get("/exercicios", getExercicios);
// routes.get("/exercicios_estaticos", getExercicio_estatico);

routes.get("/ex1", ex1EJSRefatorado.exibirResultado)
routes.get("/ex2", ex2EJSRefatorado.exibirResultadoVerificaPar);
routes.get("/ex3", ex3);
routes.get("/ex4", ex4EJSRefatorado.exibirResultado);
routes.get("/ex5", ex5EJSRefatorado.exibirResultado);
routes.get("/ex6", ex6EJSRefatorado.exibirResultado);

//Rotas do resultado dos exercicios
routes.get("/ex1/calcular", ex1EJSRefatorado.calculaArea)
routes.get("/ex2/calcular", ex2EJSRefatorado.verificaPar);
routes.get("/ex4/calcular", ex4EJSRefatorado.listarNumerosEMultiploDe3);
routes.get("/ex5/calcular", ex5EJSRefatorado.eDivisivel);
routes.get("/ex6/calcular", ex6EJSRefatorado.recebeNumeroString);










module.exports = routes;
