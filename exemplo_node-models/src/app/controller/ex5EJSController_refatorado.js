const ex5 = require("../models/ex5Model")
module.exports.eDivisivel = (req, res) => {
  let num = req.query.numero;
  let divisor = req.query.divisor;
  const exercicio5 = ex5.eDivisivel(num, divisor)

  res.render("ex5", {exercicio5})
};


module.exports.exibirResultado = (req, res) => {
    const exercicio5 = ex5.exibirResultado()
    res.render("ex5", {exercicio5})

};
