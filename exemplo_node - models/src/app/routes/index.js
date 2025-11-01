const routes = require("express").Router();
const get = require("../controller/get");
const getAlunos = require("../controller/getAlunos");
const homeController = require("../controller/homeController");
const aboutController = require("../controller/aboutController");

routes.get("/", get);
routes.get("/alunos/:nomeAluno/nota1/:notaAluno", getAlunos);

//
routes.get('/home_ejs', homeController);
routes.get('/about_ejs', aboutController);


module.exports = routes;
