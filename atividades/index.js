// // let altura = 5
// // let base = 10
// // area = base*altura
// // console.log(area)

// // let NumeroPar = 2

// // if (NumeroPar % 2 == 0) {
// //     console.log("O numero é par")
// // } else {
// //     console.log("O numero não é par")
// // }

// // for (let i = 1; i <= 10 ; i++) {
// //     console.log(`${i}`)

// // }

// // 4. Crie um programa que exiba os números N primeiros múltiplos de
// // 3 (começando por 1) no console.
// // ○ Defina uma variável N para determinar o número de
// // elementos a testar.
// // ○ Use um loop for para iterar de 1 até N.
// // ○ Use if para verificar se o número é múltiplo de 3.

// // let N = 21;

// // for (let i = 1; i <= N; i++) {
// //     console.log(`${i}`)
// // }
// // if (N % 3 == 0) {
// //   console.log(`O numero ${N} é multiplo de 3`);
// // } else {
// //   console.log(`O numero ${N} não é multiplo de 3`);
// // }

// // 5. Crie uma função chamada eDivisivel que recebe dois números
// // (num e divisor) e retorna:
// // ○ True se num for divisível por divisor;
// // ○ False caso contrário.

// // let num = 10;
// // let divisor = 3;
// // function eDivisivel() {
// //   if (num % divisor == 0) {
// //     console.log(true);
// //   } else {
// //     console.log(false);
// //   }
// // }

// // eDivisivel()

// // Crie um programa que contenha um array chamado “numeros”,
// // com os valores [1,2,3,4,5,10,15,20,22,33,35]. Em seguida,
// // percorra o array e some os valores pares de “numeros”. Ao fim,
// // imprima o valor acumulado na tela.

// // let numeros = [1,2,3,4,5,10,15,20,22,33,35]
// // let Somapares = 0
// // for (let i = 0; i < numeros.length; i++) {
// //   if (numeros[i] % 2 === 0) {
// //     Somapares += numeros[i]//2 4 10 20 22
// //   } 
// // }
// // console.log(Somapares)

// // (Desafio desafiador) Crie uma função para inverter uma String. A
// // função deve se chamar “inverteString” e deve receber uma String
// // como parâmetro e invertê-la. Para isso, percorra a String
// // caractere a caractere. A String resultante deve ser devolvida pela
// // função. Ao fim, fora da função, imprima o valor de uma String de
// // exemplo na tela. NÃO USE MÉTODOS PRONTOS DA
// // LINGUAGEM.


// // let Str_inv = ""
// // function InverterString(Str) {
// //   for (let i = 6; i >= 0; i--) {
// //     Str_inv += Str[i]
    
// //   }
// //   console.log(Str_inv)
// // }
// // InverterString("Gundam")



// let Str_inv = ""
// function InverterString(Str) {
//   for (let i = 5; i >= 0; i--) {
//     Str_inv += Str[i]
    
//   }
  
// }
// InverterString("Gundam")
// let resultadoFraseInvertida = Str_inv

// console.log(resultadoFraseInvertida)


  let numeros = ["10", "20", "30", "40", "50", "60"];
  let resultante = numeros.map(Number)
  console.log(resultante)
  // let Somapares = 0;
  // for (let i = 0; i < numeros.length; i++) {
  //   if (numeros[i] % 2 === 0) {
  //     Somapares += numeros[i]; //2 4 10 20 22
  //   }
  // }