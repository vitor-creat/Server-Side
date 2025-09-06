module.exports = (req, res) => {
  //exercicio 1
let altura = 5
let base = 10
area = base*altura


//exercicio 2
let NumeroPar = 2
let resultadoPar = NumeroPar %2 == 0 ? "O numero é par" : "O numero é impar"

//exercicio 3
let NumerosAte10String = ""
for (let i = 1; i <= 10 ; i++) {
  NumerosAte10String += i + " "
}

//exercicio 4
let N = 21;
let numerosAteNString = " "
for (let i = 1; i <= N; i++) {
    numerosAteNString += i + " "
}
let verificaMultiplo =  N % 3 == 0 ? "O numero é multiplo de 3" : "O numero não é multiplo de 3" 
//não sei adaptar essa merda para aparecer, portanto, vai ficar comementado
// if (N % 3 == 0) {
//   console.log(`O numero ${N} é multiplo de 3`);
// } else {
//   console.log(`O numero ${N} não é multiplo de 3`);
// }


//exercicio 5


function eDivisivel(num, divisor) {
  if (num % divisor == 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

resultadoFunc = eDivisivel(10,3)


//exercicio 6
let numeros = [1,2,3,4,5,10,15,20,22,33,35]
let Somapares = 0
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    Somapares += numeros[i]//2 4 10 20 22
  } 
}
console.log(Somapares)

//desafio incrivel
let Str_inv = ""
function InverterString(Str) {
  for (let i = 5; i >= 0; i--) {
    Str_inv += Str[i]
    
  }
  // console.log(Str_inv)
}
InverterString("Gundam")
let resultadoFraseInvertida = Str_inv

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
      

        `
  );
};
