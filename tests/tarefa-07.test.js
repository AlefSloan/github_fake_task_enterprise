const checks = [
  {
    "tipo": "conteudo",
    "arquivo": "cliente.txt",
    "esperado": "Cliente: Marina Costa"
  },
  {
    "tipo": "conteudo",
    "arquivo": "calculo.txt",
    "esperado": "7 + 6 = 13"
  },
  {
    "tipo": "existe",
    "arquivo": "relatorio_fevereiro.txt",
    "conteudo": "Relatório de fevereiro."
  },
  {
    "tipo": "naoExiste",
    "arquivo": "relatorio_fevrero.txt"
  }
];

function validar({ rodarChecks }) {
  rodarChecks("07", checks);
}

module.exports = { validar };
