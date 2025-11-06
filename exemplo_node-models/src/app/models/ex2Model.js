let numerosPares = []

function verificaPar(numero) {
    const ehPar = numero % 2 == 0 ? `O número ${numero} é par` : `O número ${numero} não é par`
    numerosPares.push({numero: ehPar})
    return numerosPares
}
function exibirResultadoVerificaPar() {
    return numerosPares;
}

module.exports = {verificaPar, exibirResultadoVerificaPar}