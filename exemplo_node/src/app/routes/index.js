const routes = require('express').Router()
const get = require('../controller/get')
const getAlunos = require('../controller/getAlunos')
const getExercicios = require('../controller/exercicios')
routes.get("/", get)
routes.get('/alunos', getAlunos)
routes.get('/exercicios', getExercicios)
routes.get('/exercicios')
//caminho na url apos o localhost:3000 para saber onde/oq deve ser mostrado na pagina
//a rota é o complemento da URL após o localhost:3000


module.exports = routes