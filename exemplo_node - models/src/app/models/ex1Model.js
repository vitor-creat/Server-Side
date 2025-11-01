let ex1 = []

function AdicionarNumeros(numeros) {
    ex1.push({id: Date.now(), numeros})
}
function exibirEx1() {
    return ex1;
}

function RemoverEx1(id) {
    ex1 = ex1.filter(exercicio => exercicio.id !== id)
}

module.exports = {AdicionarNumeros, exibirEx1, RemoverEx1}