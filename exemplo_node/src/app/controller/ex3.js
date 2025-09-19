module.exports = (req, res) =>{
    res.sendFile( 
      "ex3.html", {root: 'src/public'}
    )
}