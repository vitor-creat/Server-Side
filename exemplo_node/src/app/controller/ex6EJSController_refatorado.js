module.exports.calcular = (req, res, next) => {
  let numeroString = req.query.numerosArr.split(",");;
  try {
    if (numeroString == null) {
      throw new Error("Parâmetro numeroString não fornecido");
    }
   
  } catch (error) {
    next(error)
  }
let numeros = numeroString.map(Number)
  let Somapares = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      Somapares += numeros[i]; //2 4 10 20 22
    }
  }
  res.render("ex6",{Somapares})
};


module.exports.mostrar = (req, res) => {
    let Somapares = ""
    res.render("ex6", {Somapares})
};
