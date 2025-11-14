const lista_exercicio = require("../model/exercicio");
module.exports.listar = (req, res) => {
  lista = lista_exercicio.listar();
  res.render("professor/", { lista });
};
module.exports.mostrar = (req, res) => {
  res.render("professor/adicionar");
};
module.exports.adicionar = (req, res) => {
  const { id, title, descricao, resposta, pontos } = req.body;
  const exercicio = { id, title, descricao, resposta, pontos };
  lista_exercicio.adicionar(exercicio);
  res.redirect("/professor");
};

module.exports.atualizar = (req, res) =>{
  const {id} = req.params;
    //para ter uma maior na hora da função receber seu parâmetro
  const exercicioAtualizado = id
  lista_exercicio.atualizar(exercicioAtualizado)
  res.render("atualizar")
}

module.exports.remover = (req, res) => {
  const {id} = req.params;
  lista_exercicio.remover(id)
  res.redirect("/professor")
}