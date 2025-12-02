const routes = require("express").Router();

const alunoController = require("./") 

routes.get("/listar", alunoController.listar)
routes.get("/responder/:id", alunoController.mostrarResponder)
routes.post("/responder", alunoController.responder)


module.exports = routes