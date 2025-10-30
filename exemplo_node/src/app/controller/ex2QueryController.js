module.exports = (req,res, next) =>{
  let Numero = req.query.numero
  
try {
    if (Numero == null) {
        throw new Error("Parâmetro Numero não fornecido")
    }
} catch (error) {
    next(error)
}
    let resultadoPar = Numero %2 == 0 ? "O numero é par" : "O numero é impar"
    res.render('ex2', {resultadoPar})
}