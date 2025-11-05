const ex4 = require("../models/ex4Model")
module.exports.listarNumerosEMultiploDe3 = (req, res, next) => {
  let N = req.query.numero;
  const exercicio4 = ex4.listarNumerosEMultiploDe3(N)
  const n = exercicio4.length;
  const start = n - 5 > 0 ? n - 5 : 0;
  ultimosExercicios = exercicio4.slice(start, n);
  res.render('ex4', {ultimosExercicios});
};


module.exports.exibirResultado = (req, res) => {
  const exercicio4 = ex4.exibirResultado(N)
  const n = exercicio4.length;
  const start = n - 5 > 0 ? n - 5 : 0;
  ultimosExercicios = exercicio4.slice(start, n);
  res.render("ex4", { ultimosExercicios });

};
