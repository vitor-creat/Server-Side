const lista_exercicios = require("../model/exercicio");

module.exports.listar = (req, res) => {
  lista = lista_exercicios.listar();
  res.render("professor/listar", { lista });
};
module.exports.mostrar = (req, res) => {
  res.render("professor/adicionar ");
};
module.exports.adicionar = (req, res) => {
  const { id, descricao, resposta, pontos } = req.body;
  const aluno = { id, descricao, resposta, pontos };
  lista_exercicios.adicionar(aluno);
  res.redirect("/professor");
};
