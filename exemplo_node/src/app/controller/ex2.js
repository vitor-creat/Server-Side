module.exports = (req, res) =>{
    res.sendFile( 
      "ex2.html", {root: 'src/public'}
    )
}