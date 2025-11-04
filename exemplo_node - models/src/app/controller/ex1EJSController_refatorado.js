// controllers/tarefaController.js

const ex1 = require('../models/ex1Model');

exports.exibirResultado = (req, res) => {
    const exercicio1 = ex1.exibirResultado();
    res.render('ex1', { exercicio1 });
};
exports.CalculaArea = (req, res) => {
    const { base, altura } = req.query;
    const exercicio1 = ex1.CalculaArea(base, altura);
    res.render('ex1',  {exercicio1 });
};
