module.exports = (req,res) =>{
    let base = req.params.base
    let altura = req.params.altura
    let area = base*altura
    res.send(`<h1>A Area do retangulo é igual a: ${area}</h1>`)
}