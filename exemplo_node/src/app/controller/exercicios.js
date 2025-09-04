module.exports = (req, res) => {

    let altura = 5
    let base = 10
    area = base*altura
    // console.log(area)

    

    res.send(
        `
        <h1>${area}</h1>

        `
    )
}