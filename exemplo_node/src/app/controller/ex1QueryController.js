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
    res.render("ex1", {area});
  } catch (error) {
    next(error)
  }
};
