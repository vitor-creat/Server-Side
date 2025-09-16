module.exports = (req, res) => {
  let numeroString = req.params.numerosArr.split(",");
  let numeros = numeroString.map(Number)
  let Somapares = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      Somapares += numeros[i]; //2 4 10 20 22
    }
  }
  res.send(`A soma dos pares é: ${Somapares}`)
};
