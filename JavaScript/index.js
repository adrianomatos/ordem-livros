// VARIÁVEIS
// let nome = "Adriano Matos";
// let idade = 38;
// let casado = true;
// let altura = 1.78;

// ARRAYS
// var notas = [3.5, 5.8, 8.5, 7, 9];
// console.log(notas[0]);
// console.log(notas[0] + notas[2]);
// notas.push(8.1)
// console.log(notas[5]);
// console.log(notas);

// OBJETOS
// const autor = {
//   nome: "Adriano Matos",
// 	idade: 38,
// 	casado: true,
// 	altura: 1.78
// };
// console.log(autor.nome);

// ARRAY DE OBJETOS
// const autores = [
//   {
//     id: 1,
//     nome: "Adriano Matos",
//   },
//   {
//     id: 2,
//     nome: "Rebeca Sales",
//   },
//   {
//     id: 3,
//     nome: "Filipe Matos",
//   },
// ];
// console.log(autores[2].nome);
// // Se não tiver, retorna undefined
// console.log(autores[3]?.nome);

// ARRAY DE OBJETOS COM ARRAYS
// const autores_novo = [
//   {
//     id: 1,
//     nome: "Adriano Matos",
//     profissao: [
//       {
//         a: "Professor",
//         b: "Programador",
//         c: "Enfermeiro",
//       },
//     ],
//   },
// ];
// console.log(autores_novo[0].nome);
// console.log(autores_novo[0].profissao[0]);
// console.log(autores_novo[0].profissao[0].b);

// LAÇO EM ARRAYS
// const pares = [2, 4, 6, 8, 10, 12, 14, 16];
// for (let numero of pares) {
//   if (numero >= 10) {
//     console.log("Número: " + numero);
//   }
//   // console.log("Dobro: " + numero * 2);
// }

import series from "./modulo/dados/series.js";

for (let serie of series) {
  console.log(serie.titulo + " - " + serie.autor.nome);
  if (serie.autor.nome == "Adriano Matos") {
    console.log("Promoção 10% \t CUPOM: Black24 \n");
  }
}
