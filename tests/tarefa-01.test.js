const checks = [
  {
    "tipo": "conteudo",
    "arquivo": "cliente.txt",
    "esperado": "Cliente: Marina Costa"
  },
  {
    "tipo": "conteudo",
    "arquivo": "calculo.txt",
    "esperado": "12 + 8 = 20"
  },
  {
    "tipo": "conteudo",
    "arquivo": "status.txt",
    "esperado": "Status: concluído"
  }
];

function validar({ rodarChecks }) {
  rodarChecks("01", checks);
}

module.exports = { validar };
