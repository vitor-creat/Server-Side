//mudei para const para que o array não possa ser reatribuido
//impedindo erros que eu demoro muito tempo para consertar
let lista = []

function adicionar(exercicio) {
    lista.push(exercicio)
}
function listar() {
    return lista
}
function atualizar(exercicioAtualizado) {
    const exercicio = lista.find(ex => ex.id == exercicioAtualizado.id)
    if (exercicio) {
        exercicio.title = exercicioAtualizado.title
        exercicio.descricao = exercicioAtualizado.descricao
        exercicio.resposta = exercicioAtualizado.resposta
        exercicio.pontos = exercicioAtualizado.pontos
    }
}
function remover(id){
 lista = lista.filter(ex => ex.id !== id)
    
}


module.exports = {
    adicionar, listar ,remover, atualizar
}