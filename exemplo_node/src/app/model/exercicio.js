let lista = []

function adicionar(exercicio) {
    lista.push(exercicio)
}
function listar() {
    return lista
}
  
function buscar(id){
    return lista.find(ex => ex.id === id)
}

function atualizar(exercicio) {
    idx = lista.findIndex(ex => ex.id === exercicio.id)
    
    lista[idx] = exercicio
    console.log(lista[idx])
    
}
function remover(id) {
    lista = lista.filter(ex => ex.id != id)
}

module.exports = {
    adicionar, listar, remover, atualizar, buscar
}