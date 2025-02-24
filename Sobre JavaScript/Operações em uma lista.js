
// MAP = PERCORRER TODO UM ARRAY
// map é uma função ou estrutura de dados que permite aplicar um procedimento a todos os elementos de uma lista.

// let lista = ["MATHEUS", "JOSE", "MARIA", "LUCAS"];

// lista.map((item, index) => {
//   console.log(`PASSANDO: ${item} - Esta na posicao ${index} `)
// })

// =======================================================================

// Reduce = O reduce busca reduzir um array.
// Reduce é uma função ou método que permite reduzir um array a um único valor. 

let numeros = [5, 3, 2, 5];

let total = numeros.reduce((acumulador, numero, indice, original)=>{
  console.log(`${acumulador} - total ate o momento`);
  console.log(`${numero} - valor atual`);
  // console.log(`${indice} - indice atual`);
  // console.log(`${original} - array original`);
  console.log("========================")

  return acumulador += numero;

})


console.log("TOTAL DO REDUCE: " + total);