module.exports = (req, res) =>{
    res.sendFile( 
      "ex4.html", {root: 'src/public'}
    )
}