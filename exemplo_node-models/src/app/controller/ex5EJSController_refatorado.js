module.exports.calcular = (req, res, next) => {
  let num = req.query.numero;
  let divisor = req.query.divisor;
  function eDivisivel() {
    num % divisor == 0 ? true : false;
  }
  eDivisivel();
  let resultadoFunc = num % divisor == 0 ? "é divisivel" : "Não é divisivel";

  res.render("ex5", {resultadoFunc})
};


module.exports.mostrar = (req, res) => {
    let resultadoFunc = ""
    res.render("ex5", {resultadoFunc})

};
