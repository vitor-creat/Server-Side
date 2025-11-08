const lista_exercicios = require("../model/exercicio");
module.exports.listar = (req, res) => {
  lista = lista_exercicios.listar();
  res.render("professor/", { lista });
};
module.exports.mostrar = (req, res) => {
  res.render("professor/adicionar");
};
module.exports.adicionar = (req, res) => {
  const { id, title, descricao, resposta, pontos } = req.body;
  const aluno = { id, title, descricao, resposta, pontos };
  lista_exercicios.adicionar(aluno);
  res.redirect("/professor");
};

// module.exports.atualizar = (req, res) =>{
//   const {id} = req.params;
//   lista_exercicios.atualizar(id)
//   res.redirect("/professor")
// }

module.exports.remover = (req, res) => {
  const {id} = req.params;
  lista_exercicios.remover(id)
  res.redirect("/professor")
}