module.exports = (req, res, next) => {
  let num = req.query.numero;
  let divisor = req.query.divisor;
  try {
    if (num == null) {
      throw new Error("Parâmetro Numero não fornecido");
    }
    if (divisor == null) {
      throw new Error("Parâmetro Divisor não fornecido");
    }
    
  } catch (error) {
    next(error)
  }
  function eDivisivel() {
    num % divisor == 0 ? true : false;
  }
  eDivisivel();
  let resultadoFunc = num % divisor == 0 ? true : false;

  res.send(`O resultado é: ${resultadoFunc}`)
};
