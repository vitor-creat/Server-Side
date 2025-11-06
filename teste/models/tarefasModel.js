//Esse exemplo é meramente um exemplo
//isso não bate com o que eu vou ter que fazer

//cria um array para quardar as tarefas adicionadas
let tarefas = [];
//função para pegar a tarefa e adicionar no array tarefas
function adicionarTarefa(descricao) {
    tarefas.push({ id: Date.now(), descricao });
    console.log(tarefas[0])
}
//vai exibir as tarefas
function obterTarefas() {
    return tarefas;
}
// vai remover a tarefa por id
function removerTarefa(id) {
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
}
module.exports = { adicionarTarefa, obterTarefas, removerTarefa };