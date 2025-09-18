module.exports = (req, res, next) => {
  let base = req.query.base;
  let altura = req.query.altura;
  try {
    if (base == null) {
      throw new Error("Parâmetro Base não fornecido");
    }
    if (altura == null) {
      throw new Error("Parâmetro Base não fornecido");
    }
    let area = base * altura;
    res.send(`<h1>A Area do retangulo é igual a: ${area}</h1>`);
  } catch (error) {
    next(error)
  }
};
