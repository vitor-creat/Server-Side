
const lista_exercicios = require("../model/exercicio");

module.exports.listar = (req, res) => {
  lista = lista_exercicios.listar();
  res.render("professor/", { lista });
};
module.exports.mostrar = (req, res) => {
  res.render("professor/adicionar");
};
module.exports.adicionar = (req, res) => {
  const { id, descricao, resposta, pontos } = req.body;
  const aluno = { id, descricao, resposta, pontos };
  lista_exercicios.adicionar(aluno);
  res.redirect("/professor/listar");
};

module.exports.atualizar = (req, res) =>{
  const {id, descricao, resposta,pontos} = req.body
  console.log(req.body)
  const exercicio = lista_exercicios.buscar(id)
  exercicio.descricao = descricao
  exercicio.resposta = resposta
  exercicio.pontos = pontos
  lista_exercicios.atualizar(exercicio)
  res.redirect('/professor/listar')
}

module.exports.mostrarAtualizado = (req, res) => {
  const id = req.params.id
  const exercicio = lista_exercicios.buscar(id)
  res.render("professor/atualizar", {exercicio});
};

module.exports.remover = (req, res) => {
  const id = req.params.id
  lista_exercicios.remover(id)
  res.redirect('/professor/listar')
}