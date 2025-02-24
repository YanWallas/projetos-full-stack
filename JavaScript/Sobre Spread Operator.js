
// Spread Operator é uma ferramenta do JavaScript que permite expandir os elementos de um array ou objeto em outro.

// let primeiros = [1, 2, 3];

// let numeros = [...primeiros, 4, 5, 10];
// console.log(numeros);

// let pessoa = {
//  nome: "Matheus",
//  idade: 45,
//  cargo: "RH"
// }

// let novaPessoa = {
//   ...pessoa,
//   status: "ATIVO",
//   cidade: "Campo Grande / MS",
//   telefone: "67959595959"
// };
// console.log(novaPessoa);

function novoUsuario(info){
  let dados = {
    ...info,
    status: "ATIVO",
    inicio: "20/03/2023",
    codigo: "123123"
  };

  console.log(dados);
}

novoUsuario({ nome: "Jose", sobrenome: "Silva", cargo: "DEV" })