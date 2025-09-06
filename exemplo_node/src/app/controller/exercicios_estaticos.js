module.exports = (req, res) => {

  res.send(
    `
        <h1>Primeiro Exercicio</h1>
        <h2>${area}</h2>

        <h1>Segundo Exercicio</h1>
        <h2>${resultadoPar}</h2>

        <h1>Terceiro Exercicio</h1>
        <h2>${NumerosAte10String}</h2>

        <h1>Quarto Exercicio</h1>
        <h2>${numerosAteNString + "e" + " " + verificaMultiplo}</h2>

        <h1>Quinto Exercicio</h1>
        <h2>${resultadoFunc}</h2>

        <h1>Sexto Exercicio</h1>
        <h2>${Somapares}</h2>

        <h1>Setimo Exercicio</h1>
        <h2>${resultadoFraseInvertida}</h2>
      
        <script src="./scripts.js"></script>
        `
  );
};