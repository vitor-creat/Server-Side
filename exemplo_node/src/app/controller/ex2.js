module.exports = (req,res) =>{
  let Numero = req.params.numero
  let resultadoPar = Numero %2 == 0 ? "O numero é par" : "O numero é impar"
    res.send(`<h1>${resultadoPar}</h1>`)
}