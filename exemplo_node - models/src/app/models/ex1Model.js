let resultados = []

function CalculaArea(base, altura) {
    const area = base*altura
    resultados.push({area: area})
}
function exibirResultado() {
    return resultados;
}

module.exports = {CalculaArea, exibirResultado}