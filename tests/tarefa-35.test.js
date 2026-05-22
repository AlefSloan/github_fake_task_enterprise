const checks = [
  {
    "tipo": "json",
    "arquivo": "meta.json",
    "chave": "metaMensal",
    "esperado": 35
  },
  {
    "tipo": "conteudo",
    "arquivo": "resultado.txt",
    "esperado": "25 + 10 = 35"
  },
  {
    "tipo": "conteudo",
    "arquivo": "cliente.txt",
    "esperado": "Cliente: Final Tech"
  }
];

function validar({ rodarChecks }) {
  rodarChecks("35", checks);
}

module.exports = { validar };
