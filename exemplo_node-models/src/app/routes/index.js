const routes = require("express").Router();
const get = require("../controller/get");
const getAlunos = require("../controller/getAlunos");
const homeController = require("../controller/homeController");
const aboutController = require("../controller/aboutController");
const userController = require("../controller/userController")
const adminController = require("../controller/adminController")

routes.get("/", get);
routes.get("/alunos/:nomeAluno/nota1/:notaAluno", getAlunos);

//
routes.get('/home_ejs', homeController);
routes.get('/about_ejs', aboutController);
routes.get('/user', userController);
routes.get('/admin', adminController);


module.exports = routes;
