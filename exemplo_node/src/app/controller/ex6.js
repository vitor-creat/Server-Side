module.exports = (req, res) => {
  let numeros = [1, 2, 3, 4, 5, 10, 15, 20, 22, 33, 35];
  let Somapares = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      Somapares += numeros[i]; //2 4 10 20 22
    }
  }
  res.send(`${Somapares}`)
};
