module.exports = (req, res) =>{
let NumerosAte10String = ""
for (let i = 1; i <= 10 ; i++) {
  NumerosAte10String += i + " "
}
res.send(`<h1>${NumerosAte10String}</h1>`)
}