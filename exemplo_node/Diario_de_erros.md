Na função abaixo, por algum motivo, ela só funcionava se houvesse um console.log dentro dela. Caso contrário, não funcionava de jeito nenhum.
Outro problema é que, inicialmente, ela estava apagando todos os exercícios exibidos na tela. Ainda não entendi exatamente o motivo, mas consegui corrigir o erro.

Funções que não funcionaram:
function remover(exercicio) {
    console.log("passou aqui!!");
    lista = lista.filter(ex => ex.id != exercicio.id);
    console.log("Chegou aqui!!");
}

function remover(exercicio) {
    return lista = lista.filter(ex => ex.id != exercicio.id);
}

function remover(exercicio) {
    lista = lista.filter(ex => ex.id != exercicio.id);
    return lista;
}

Solução encontrada e por que ela funciona

Model:

function remover(id) {
    const idNum = Number(id);
    lista = lista.filter(ex => ex.id !== idNum);
}


A solução, à primeira vista, não parece ter nada de diferente, mas ela esconde erros sutis que estavam passando despercebidos.
O problema estava no fato de eu estar passando o id para a função como 'exercicio', mas tratando esse parâmetro como se fosse um objeto inteiro.
A correção foi trocar o parâmetro para id e, por redundância, usar o operador !==, que garante comparação por valor e tipo.
Além disso, adicionei uma constante para converter o parâmetro em número (Number(id)), garantindo que o tipo estivesse correto — sugestão do ChatGPT (ainda estou decidindo se mantenho).

Problema com a função de atualizar

A função de atualizar estava, de alguma forma, quebrando completamente as outras páginas da aplicação, o que me deu uma baita dor de cabeça.
O erro era que o array lista perdia a propriedade forEach, o que me indicava que ele tinha deixado de ser um array.

Controller:
module.exports.atualizar = (req, res) => {
  const { id } = req.params;
  const exercicioAtualizado = id; // para facilitar o recebimento do parâmetro
  lista_exercicios.atualizar(exercicioAtualizado);
  res.redirect("/professor");
};

Model (versão com erro):
function atualizar(exercicioAtualizado) {
    lista = lista.find(ex => ex.id == exercicioAtualizado.id);
    if (exercicio) {
        exercicio.title = exercicioAtualizado.title;
        exercicio.descricao = exercicioAtualizado.descricao;
        exercicio.resposta = exercicioAtualizado.resposta;
        exercicio.pontos = exercicioAtualizado.pontos;
    }
}

Por que o erro acontecia:

A raiz do problema estava nessa linha:

lista = lista.find(ex => ex.id == exercicioAtualizado.id);


Percebe o problema? Eu não percebi de primeira também.
Com um olhar mais atento, dá pra ver que essa linha sobrescreve o array lista com o resultado de .find(), e o .find() não retorna um array, mas sim um único objeto.
Por isso, quando o código tentava fazer lista.forEach(...), dava erro, já que objetos não possuem esse método.

Em resumo: o .find() retornava um objeto, e como eu estava jogando esse retorno dentro de lista, o array deixava de existir.

Solução:
Controller:
module.exports.atualizar = (req, res) => {
  const { id } = req.params;
  const exercicioAtualizado = id; // para facilitar a passagem do parâmetro
  lista_exercicios.atualizar(exercicioAtualizado);
  res.redirect("/professor");
};

Model (corrigido):
function atualizar(exercicioAtualizado) {
    const exercicio = lista.find(ex => ex.id == exercicioAtualizado.id);
    if (exercicio) {
        exercicio.title = exercicioAtualizado.title;
        exercicio.descricao = exercicioAtualizado.descricao;
        exercicio.resposta = exercicioAtualizado.resposta;
        exercicio.pontos = exercicioAtualizado.pontos;
    }
}

