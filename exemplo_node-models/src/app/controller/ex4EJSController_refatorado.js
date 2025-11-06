const ex4 = require("../models/ex4Model");

module.exports.listarNumerosEMultiploDe3 = (req, res) => {
  let N = req.query.numero;
  const exercicio4 = ex4.listarNumerosEMultiploDe3(N);
  const n = exercicio4.length;
  const start = n - 5 > 0 ? n - 5 : 0;
  ultimosResultadosNumerosAteN = exercicio4.numerosAteN.slice(start, n);
  ultimosResultadosEhMultiplo = exercicio4.resultados.slice(start, n);
  res.render("ex4", { ultimosResultadosEhMultiplo, ultimosResultadosNumerosAteN });
};

module.exports.exibirResultado = (req, res) => {
  const exercicio4 = ex4.exibirResultado();
  const n = exercicio4.length;
  const start = n - 5 > 0 ? n - 5 : 0;
  ultimosResultadosNumerosAteN = exercicio4.numerosAteN.slice(start, n);
  ultimosResultadosEhMultiplo = exercicio4.resultados.slice(start, n);
  console.log("chegou aqui!!! ");
  res.render("ex4", { ultimosResultadosEhMultiplo, ultimosResultadosNumerosAteN });
};
