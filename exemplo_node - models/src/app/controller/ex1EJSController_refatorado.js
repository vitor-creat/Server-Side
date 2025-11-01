// controllers/tarefaController.js

const ex1 = require('../models/ex1Model');

exports.exibirResultado = (req, res) => {
    const exercicio1 = ex1.exibirResultado();
    res.render('ex1', { exercicio1 });
};
exports.CalculaArea = (req, res) => {
    const { base, altura } = req.query;
    ex1.CalculaArea(base, altura);
    res.render('ex1');
};
// exports.RemoverEx1 = (req, res) => {
//     const { id } = req.params;
//     ex1.remover(parseInt(id));
//     res.redirect('/');
// };
