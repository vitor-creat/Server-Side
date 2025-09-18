module.exports = (req,res) =>{
    let base = req.query.base
    let altura = req.query.altura
    let area = base*altura
    res.send(`<h1>A Area do retangulo é igual a: ${area}</h1>`)
}