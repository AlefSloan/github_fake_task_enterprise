const checks = [
  {
    "tipo": "conteudo",
    "arquivo": "proposta.txt",
    "esperado": "Cliente: Beta Commerce"
  },
  {
    "tipo": "conteudo",
    "arquivo": "resumo.md",
    "esperado": "# Resumo da proposta"
  },
  {
    "tipo": "existe",
    "arquivo": "aprovacao.txt",
    "conteudo": "Aprovação registrada."
  }
];

function validar({ rodarChecks }) {
  rodarChecks("09", checks);
}

module.exports = { validar };
