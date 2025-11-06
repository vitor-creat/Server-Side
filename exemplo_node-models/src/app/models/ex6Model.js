let resultadosSoma = []

function recebeNumeroString(numeroString) {
   let numeros = numeroString.map(Number)
    let Somapares = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      Somapares += numeros[i]; //2 4 10 20 2
    }
  }
  resultadosSoma.push({resultadoSoma: Somapares})

    return resultadosSoma
}
function exibirResultado() {
    return resultadosSoma;
}

module.exports = {recebeNumeroString, exibirResultado}


// let numeroString = req.query.numerosArr.split(",");
// let numeros = numeroString.map(Number)
//   