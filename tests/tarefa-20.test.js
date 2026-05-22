const checks = [
  {
    "tipo": "conteudo",
    "arquivo": "qualidade.md",
    "esperado": "# Relatório de qualidade"
  },
  {
    "tipo": "conteudo",
    "arquivo": "verificacao.txt",
    "esperado": "Status: concluído"
  },
  {
    "tipo": "json",
    "arquivo": "qualidade.json",
    "chave": "nota",
    "esperado": 8
  }
];

function validar({ rodarChecks }) {
  rodarChecks("20", checks);
}

module.exports = { validar };
