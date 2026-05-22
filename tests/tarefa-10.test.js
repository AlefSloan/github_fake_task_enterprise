const checks = [
  {
    "tipo": "conteudo",
    "arquivo": "sprint.txt",
    "esperado": "Status: concluído"
  },
  {
    "tipo": "conteudo",
    "arquivo": "pontos.txt",
    "esperado": "5 + 8 = 13"
  },
  {
    "tipo": "existe",
    "arquivo": "planejamento.txt",
    "conteudo": "Planejamento da sprint."
  },
  {
    "tipo": "naoExiste",
    "arquivo": "planejamneto.txt"
  }
];

function validar({ rodarChecks }) {
  rodarChecks("10", checks);
}

module.exports = { validar };
