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
const ex6 = require("../controller/ex6");

const ex1QueryController = require ('../controller/ex1QueryController')
const ex2QueryController = require("../controller/ex2QueryController");
const ex3QueryController = require("../controller/ex3QueryController");
const ex4QueryController = require("../controller/ex4QueryController");
const ex5QueryController = require("../controller/ex5QueryController");
const ex6QueryController = require("../controller/ex6QueryController");
routes.get("/", get);
routes.get("/alunos/:nomeAluno/nota1/:notaAluno", getAlunos);
routes.get("/exercicios", getExercicios);
routes.get("/exercicios_estaticos", getExercicio_estatico);

//Rotas dos arquivos HTML
routes.get("/ex1", ex1)
routes.get("/ex2", ex2)
routes.get("/ex3", ex3)
routes.get("/ex4", ex4)
routes.get("/ex5", ex5)
routes.get("/ex6", ex6)

//Rotas do resultado dos exercicios
routes.get("/ex1/mostrar", ex1QueryController)
routes.get("/ex2/mostrar", ex2QueryController)
routes.get("/ex3/mostrar", ex3QueryController)
routes.get("/ex4/mostrar", ex4QueryController)
routes.get("/ex5/mostrar", ex5QueryController)
routes.get("/ex6/mostrar", ex6QueryController)






// //maneira diferenciada
// routes.get("/usuarios/:idUsuario", (req, res) => {
//   const id = req.params.idUsuario;
//   res.send(`
//         <h1>Id do Usuário: ${id}</h1>    
//     `);
// });

//caminho na url apos o localhost:3000 para saber onde/oq deve ser mostrado na pagina
//a rota é o complemento da URL após o localhost:3000

module.exports = routes;
