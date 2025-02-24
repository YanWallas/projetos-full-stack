
// FIND - é uma função que retorna o primeiro elemento de um array que atende a uma determinada condição. 

let listagem = [5, 3, "Jose", 2, "Matheus", "Jose"]

let busca = listagem.find((item)=>{
  return item === "Jose";
})

console.log(busca);


// FILTER - é um recurso que permite fazer a filtragem de elementos com apenas poucas linhas de comandos. 

let palavras = ["Matheus", "Ana", "Jose", "Ricardo Silva", "Sujeito Programador", "Jose"];

let resultado = palavras.filter((item)=>{
  return item.length >= 5;
})

console.log(resultado);