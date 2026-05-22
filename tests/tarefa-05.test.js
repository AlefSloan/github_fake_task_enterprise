const checks = [
  {
    "tipo": "conteudo",
    "arquivo": "soma.txt",
    "esperado": "30 + 15 = 45"
  },
  {
    "tipo": "json",
    "arquivo": "fatura.json",
    "chave": "parcelas",
    "esperado": 3
  },
  {
    "tipo": "conteudo",
    "arquivo": "cliente.txt",
    "esperado": "Cliente: Loja Solare"
  }
];

function validar({ rodarChecks }) {
  rodarChecks("05", checks);
}

module.exports = { validar };
