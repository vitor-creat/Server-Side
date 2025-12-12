const routes = require("express").Router();

const exercicioController = require("../controller/professorController") 

routes.get("/listar", exercicioController.listar)
routes.get("/adicionar", exercicioController.mostrar)
routes.post("/adicionar", exercicioController.adicionar)
routes.get("/remover/:id", exercicioController.remover)
//o get vai ser a requisição exposta na url 
routes.get("/atualizar/:id", exercicioController.mostrarAtualizado)
//o post sera os parametros de formulario
routes.post("/atualizar", exercicioController.atualizar)


module.exports = routes