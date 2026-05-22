const checks = [
  {
    "tipo": "conteudo",
    "arquivo": "evento.md",
    "esperado": "# Checklist do evento"
  },
  {
    "tipo": "existe",
    "arquivo": "local.txt",
    "conteudo": "Local confirmado."
  },
  {
    "tipo": "conteudo",
    "arquivo": "participantes.txt",
    "esperado": "20 + 5 = 25"
  }
];

function validar({ rodarChecks }) {
  rodarChecks("30", checks);
}

module.exports = { validar };
