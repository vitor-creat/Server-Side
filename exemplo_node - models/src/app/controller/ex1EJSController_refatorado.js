// controllers/tarefaController.js

const ex1 = require('../models/ex1Model');

exports.exibirEx1 = (req, res) => {
    const exercicio1 = ex1.obterTarefas();
    res.render('index', { exercicio1 });
};
exports.AdicionarNumeros = (req, res) => {
    const { descricao } = req.body;
    ex1.adicionarNumeros(descricao);
    res.redirect('/');
};
exports.RemoverEx1 = (req, res) => {
    const { id } = req.params;
    ex1.remover(parseInt(id));
    res.redirect('/');
};
