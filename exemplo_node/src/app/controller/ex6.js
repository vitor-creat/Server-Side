module.exports = (req, res) =>{
    res.sendFile( 
      "ex6.html", {root: 'src/public'}
    )
}