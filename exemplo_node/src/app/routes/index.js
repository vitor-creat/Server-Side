const routes = require('express').Router()
const get = require('../controller/get')
const getAlunos = require('../controller/getAlunos')
routes.get("/", get)
routes.get('/alunos', getAlunos)
//caminho na url apos o localhost:3000 para saber onde/oq deve ser mostrado na pagina
//a rota é o complemento da URL após o localhost:3000


module.exports = routes