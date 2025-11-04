module.exports = (req, res) =>{
    res.sendFile( 
      "exercicio.html", {root: 'src/public'}
    )
}