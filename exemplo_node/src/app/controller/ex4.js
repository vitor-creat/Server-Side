module.exports = (req, res) => {
  let N = req.query.numero;
  let numerosAteNString = "";
  for (let i = 1; i <= N; i++) {
    numerosAteNString += i + " ";
  }
  let verificaMultiplo =
    N % 3 == 0 ? "O numero é multiplo de 3" : "O numero não é multiplo de 3";
  res.send(`<h1>${numerosAteNString + "e" + " " + verificaMultiplo}</h1>`);
};
