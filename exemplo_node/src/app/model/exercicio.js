let lista = []

function adicionar(exercicio) {
    lista.push(exercicio)
}
function listar() {
    return lista
}
// function atualizar(exercicioAtualizado) {
//     lista = lista.find(ex => ex.id == exercicioAtualizado.id)
//     if (lista) {
//         lista.title = exercicioAtualizado.titlez
//         lista.descricao = exercicioAtualizado.descricao
//         lista.resposta = exercicioAtualizado.resposta
//         lista.pontos = exercicioAtualizado.pontos
//     }
// }
function remover(exercicio){
 lista = lista.filter(ex => ex.id != exercicio.id)
}


module.exports = {
    adicionar, listar ,remover
}