import autores from "../dados/autores.js";
import series from "../dados/series.js";

// Acesso direto
console.log(autores[0].nome);

// Somente se existir
if (autores[3] != undefined) {
  console.log(autores[3].nome);
}

// Acesso pelas séries
// console.log(series[0].autor.nome);
