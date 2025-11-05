// controllers/tarefaController.js

const ex1 = require("../models/ex1Model");

exports.calculaArea = (req, res) => {
  const { base, altura } = req.query;
  const exercicio1 = ex1.calculaArea(base, altura);
  const n = exercicio1.length;
  const start = n - 5 > 0 ? n - 5 : 0;
  ultimosExercicios = exercicio1.slice(start, n);
  res.render("ex1", { ultimosExercicios });
};

exports.exibirResultado = (req, res) => {
  const exercicio1 = ex1.exibirResultado();
  const n = exercicio1.length;
  const start = n - 5 > 0 ? n - 5 : 0;
  ultimosExercicios = exercicio1.slice(start, n);
  res.render("ex1", { ultimosExercicios });
};
