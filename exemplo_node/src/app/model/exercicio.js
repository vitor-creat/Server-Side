let lista = []

function adicionar(exercicio) {
    lista.push(exercicio)
}
function listar() {
    return lista
}
// function atualizar(exercicio) {
//     lista = lista.find()
// }
function remover(exercicio) {
    lista = lista.filter(ex => ex.id != exercicio.id)
}

module.exports = {
    adicionar, listar, remover
}