module.exports = (req, res) => {
  let num = req.query.numero;
  let divisor = req.query.divisor;
  function eDivisivel() {
    num % divisor == 0 ? true : false;
  }
  eDivisivel();
  let resultadoFunc = num % divisor == 0 ? true : false;

  res.send(`${resultadoFunc}`)

};