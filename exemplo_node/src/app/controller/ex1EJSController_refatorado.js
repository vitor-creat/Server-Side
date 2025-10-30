module.exports.calcular = (req, res) => {
  let base = req.query.base;
  let altura = req.query.altura;

    let area = base * altura;
    res.render("ex1", {area});  

};


module.exports.mostrar = (req, res) => {
  let base = req.query.base;
  let altura = req.query.altura;

    let area = base * altura;
    res.render("ex1", {area});  

};
