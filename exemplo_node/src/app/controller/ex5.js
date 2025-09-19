module.exports = (req, res) =>{
    res.sendFile( 
      "ex5.html", {root: 'src/public'}
    )
}