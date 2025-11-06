const routes = require("express").Router();

const exercicioController = require("../controller/professorController") 

routes.get("/listar", exercicioController.listar)
routes.get("/adicionar", exercicioController.mostrar)
routes.post("/adicionar", exercicioController.adicionar)

module.exports = routes