module.exports = (req, res, next) => {
  let N = req.query.numero;
  let numerosAteNString = "";

  try {
    if (N == null) {
      throw new Error("Parâmetro não definido");
    }
  } catch (error) {
    next(error);
  }
  for (let i = 1; i <= N; i++) {
    numerosAteNString += i + " ";
  }
  let verificaMultiplo =
    N % 3 == 0 ? "O numero é multiplo de 3" : "O numero não é multiplo de 3";
  res.render('ex4', {numerosAteNString, verificaMultiplo});
};
