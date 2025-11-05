let resultados = []

function calculaArea(base, altura) {
    const area = base*altura
    resultados.push({area: area})

    return resultados
}
function exibirResultado() {
    return resultados;
}

module.exports = {calculaArea, exibirResultado}