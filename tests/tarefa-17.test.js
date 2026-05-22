const checks = [
  {
    "tipo": "existe",
    "arquivo": "post_maio.md",
    "conteudo": "# Post de maio"
  },
  {
    "tipo": "naoExiste",
    "arquivo": "post_maioo.md"
  },
  {
    "tipo": "conteudo",
    "arquivo": "checklist.md",
    "esperado": "# Checklist editorial"
  },
  {
    "tipo": "conteudo",
    "arquivo": "revisoes.txt",
    "esperado": "2 + 3 = 5"
  }
];

function validar({ rodarChecks }) {
  rodarChecks("17", checks);
}

module.exports = { validar };
