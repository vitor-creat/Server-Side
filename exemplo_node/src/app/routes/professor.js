const routes = require("express").Router();
const exercicioController = require("../controller/professorController");
routes.get("/", exercicioController.listar);
routes.get("/adicionar", exercicioController.mostrar);
routes.post("/adicionar", exercicioController.adicionar);

routes.get("/atualizar/:id", exercicioController.atualizar)
routes.get("/remover/:id", exercicioController.remover)


module.exports = routes;
