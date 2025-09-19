module.exports = (req, res) =>{
    res.sendFile( 
      "ex1.html", {root: 'src/public'}
    )
}