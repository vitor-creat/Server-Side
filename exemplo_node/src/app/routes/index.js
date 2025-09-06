const routes = require('express').Router()
const get = require('../controller/get')
const getAlunos = require('../controller/getAlunos')
const getExercicios = require('../controller/exercicios')
const getExercicio_estatico = require("../controller/getExercicio")
routes.get("/", get)
routes.get('/alunos/:nomeAluno/nota1/:notaAluno', getAlunos)
routes.get('/exercicios', getExercicios)
routes.get('/exercicios_estaticos', getExercicio_estatico)
//caminho na url apos o localhost:3000 para saber onde/oq deve ser mostrado na pagina
//a rota é o complemento da URL após o localhost:3000


module.exports = routes