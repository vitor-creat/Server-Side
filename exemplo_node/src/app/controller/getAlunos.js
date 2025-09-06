module.exports = (req, res) => {
    let nome = req.params.nomeAluno
    let nota = req.params.notaAluno
    res.send(
    `<h1>Nome ${nome}, Nota:${nota}</h1>`
    )
}