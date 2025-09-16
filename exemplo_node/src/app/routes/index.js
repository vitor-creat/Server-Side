const routes = require("express").Router();
const get = require("../controller/get");
const getAlunos = require("../controller/getAlunos");
const getExercicios = require("../controller/exercicios");
const getExercicio_estatico = require("../controller/getExercicio");
const ex1 = require("../controller/ex1");
const ex2 = require("../controller/ex2");
const ex3 = require("../controller/ex3")
const ex4 = require("../controller/ex4")
const ex5 = require("../controller/ex5")
const ex6 = require("../controller/ex6")
routes.get("/", get);
routes.get("/alunos/:nomeAluno/nota1/:notaAluno", getAlunos);
routes.get("/exercicios", getExercicios);
routes.get("/exercicios_estaticos", getExercicio_estatico);
routes.get("/ex1/base/:base/altura/:altura", ex1)
routes.get("/ex2/numero/:numero", ex2)
routes.get("/ex3/", ex3)
routes.get("/ex4/numero/:numero", ex4)
routes.get("/ex5/numero/:numero/divisor/:divisor", ex5)
routes.get("/ex6/numeros/:numerosArr", ex6)





//maneira diferenciada
routes.get("/usuarios/:idUsuario", (req, res) => {
  const id = req.params.idUsuario;
  res.send(`
        <h1>Id do Usuário: ${id}</h1>    
    `);
});

//caminho na url apos o localhost:3000 para saber onde/oq deve ser mostrado na pagina
//a rota é o complemento da URL após o localhost:3000

module.exports = routes;
