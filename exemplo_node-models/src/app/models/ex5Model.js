//posso melhorar isso colocando em um array os resultados
//posso também adicionar uma string dizendo qual o numero e se
//ele é divisivel pelo divisor
//const resultados = []
// function eDivisivel(num, divisor) {
//     const Divisivel = num % divisor == 0
//     ? `O ${num} é divisivel por ${divisor}`
//     : `O ${num} não é divisivel por ${divisor}`;
//     return resultados.push(Divisivel)
// }

function eDivisivel(num, divisor) {
  const Divisivel = num % divisor == 0 ? true : false;
  return Divisivel;
}
function exibirResultado() {
  return eDivisivel();
}

module.exports = { eDivisivel, exibirResultado };
