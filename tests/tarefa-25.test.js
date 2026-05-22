const checks = [
  {
    "tipo": "conteudo",
    "arquivo": "mensal.txt",
    "esperado": "40 + 2 = 42"
  },
  {
    "tipo": "conteudo",
    "arquivo": "resumo.md",
    "esperado": "# Resumo mensal"
  },
  {
    "tipo": "conteudo",
    "arquivo": "fechamento.txt",
    "esperado": "Status: concluído"
  }
];

function validar({ rodarChecks }) {
  rodarChecks("25", checks);
}

module.exports = { validar };
