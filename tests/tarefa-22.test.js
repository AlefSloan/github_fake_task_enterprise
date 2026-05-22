const checks = [
  {
    "tipo": "conteudo",
    "arquivo": "cliente.txt",
    "esperado": "Cliente: Delta Soluções"
  },
  {
    "tipo": "conteudo",
    "arquivo": "desconto.txt",
    "esperado": "100 - 15 = 85"
  },
  {
    "tipo": "json",
    "arquivo": "proposta.json",
    "chave": "validadeDias",
    "esperado": 15
  }
];

function validar({ rodarChecks }) {
  rodarChecks("22", checks);
}

module.exports = { validar };
