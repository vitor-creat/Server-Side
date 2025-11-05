const ex2 = require("../models/ex2Model")

exports.verificaPar = (req,res) =>{
  let Numero = req.query.numero
  const exercicio2 = ex2.verificaPar(Numero)
  const n = exercicio2.length;
  const start = n - 5 > 0 ? n - 5 : 0;
  ultimosExercicios = exercicio2.slice(start, n);
  res.render('ex2', {ultimosExercicios})
 }



exports.exibirResultadoVerificaPar = (req, res) => {
  const exercicio2 = ex2.exibirResultadoVerificaPar()
  const n = exercicio2.length;
  const start = n - 5 > 0 ? n - 5 : 0;
  ultimosExercicios = exercicio2.slice(start, n);
 res.render("ex2", {ultimosExercicios})
};
