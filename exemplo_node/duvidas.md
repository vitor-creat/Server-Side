Devo perguntar ao professor, na próxima terça-feira, por que a função só funcionava com o console.log e também por que ela apagava todos os exercícios da tela.

Na função abaixo, por algum motivo, ela só funciona se houver um console.log dentro dela. Caso contrário, não funciona de jeito nenhum.
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

Solução encontrada:

A correção foi simples: substituí o operador != por !==, que retorna verdadeiro apenas quando o valor e o tipo dos dois elementos são diferentes.

Ainda não sei exatamente por que o comportamento era diferente, mas a mudança resolveu o problema.

function remover(exercicio) {
    lista = lista.filter(ex => ex.id !== exercicio.id);
}

