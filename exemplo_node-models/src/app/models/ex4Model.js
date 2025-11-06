let resultados = [];
let numerosAteN = [];
function listarNumerosEMultiploDe3(N) {
  const numeroEhMultiplo =
    N % 2 == 0
      ? `O numero ${N} é multiplo de 3`
      : `O numero ${N} não é multiplo de 3`;
  resultados.push({ ehMultiplo: numeroEhMultiplo });
  for (let i = 1; i <= N; i++) {
    numerosAteN.push({numerosAteN: i}) ;
  }
  return {resultados, numerosAteN};
}
function exibirResultado() {
  return {resultados, numerosAteN};
}

module.exports = {listarNumerosEMultiploDe3, exibirResultado}
// module.exports = {calculaArea, exibirResultado}
//   let numerosAteNString = "";
//
//   let verificaMultiplo =
//     N % 3 == 0 ? "O numero é multiplo de 3" : "O numero não é multiplo de 3";
//   res.render('ex4', {numerosAteNString, verificaMultiplo});
// };
