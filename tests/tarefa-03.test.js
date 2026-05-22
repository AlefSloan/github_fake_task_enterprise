const checks = [
  {
    "tipo": "existe",
    "arquivo": "financeiro/recibo.txt",
    "conteudo": "Recibo semanal."
  },
  {
    "tipo": "naoExiste",
    "arquivo": "entrada/recibo.txt"
  },
  {
    "tipo": "existe",
    "arquivo": "observacao.txt",
    "conteudo": "Observação registrada."
  },
  {
    "tipo": "conteudo",
    "arquivo": "anotacoes.md",
    "esperado": "# Anotações internas"
  }
];

function validar({ rodarChecks }) {
  rodarChecks("03", checks);
}

module.exports = { validar };
