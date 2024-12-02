// Define nome padrão caso nenhum valor seja recebudo como parâmetro/argumento
function saudação(nome = "Cliente", titulo="Sr(a)") {
  console.log(`Bom dia ${titulo} ${nome}`);
  console.log("Boa tarde", titulo, nome);
  console.log("Boa noite", titulo, nome, "\n");
}

saudação("Adriano Matos");
saudação("Rebeca", "Dra");
saudação();
