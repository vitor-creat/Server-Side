const ex6 = require("../models/ex6Model")
module.exports.recebeNumeroString = (req, res) => {
let numeroString = req.query.numerosArr.split(",");;
const exercicio6 = ex6.recebeNumeroString(numeroString)
  res.render("ex6",{exercicio6})
};


module.exports.exibirResultado = (req, res) => {
    const exercicio6 = ex6.exibirResultado()
    res.render("ex6", {exercicio6})
};
