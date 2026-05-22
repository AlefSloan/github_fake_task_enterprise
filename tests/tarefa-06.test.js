const checks = [
  {
    "tipo": "conteudo",
    "arquivo": "campanha.md",
    "esperado": "# Campanha Maio\n- Revisar chamada principal"
  },
  {
    "tipo": "existe",
    "arquivo": "briefing.txt",
    "conteudo": "Briefing aprovado."
  },
  {
    "tipo": "conteudo",
    "arquivo": "produto.txt",
    "esperado": "Produto: Painel Analítico"
  }
];

function validar({ rodarChecks }) {
  rodarChecks("06", checks);
}

module.exports = { validar };
