module.exports = (req, res) => {
  let num = req.params.numero;
  let divisor = req.params.divisor;
  function eDivisivel() {
    num % divisor == 0 ? true : false;
  }
  eDivisivel();
  let resultadoFunc = num % divisor == 0 ? true : false;

  res.send(`${resultadoFunc}`)

};