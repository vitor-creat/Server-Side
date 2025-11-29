
const lista_exercicios = require("../model/exercicio");

module.exports.listar = (req, res) => {
  lista = lista_exercicios.listar();
  let total = 0

  for (let i = 0; i < lista.length; i++) {
   total = total+ Number(lista[i].pontos);
  }
  res.render("aluno/index", { lista, total });
};

module.exports.mostrarResponder = (req, res) => {
  const id = req.params.id
  const exercicio = lista_exercicios.buscar(id)
  res.render("aluno/responder", {exercicio});
};

module.exports.responder = (req, res) =>{
  const {id, resposta} = req.body
  const exercicio = lista_exercicios.buscar(id)
    console.log("resposta do aluno: ", resposta, "resposta correta: ",exercicio.resposta )
  res.redirect('/aluno/listar')
}

