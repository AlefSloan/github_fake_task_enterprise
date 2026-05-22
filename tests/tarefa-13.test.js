const checks = [
  {
    "tipo": "conteudo",
    "arquivo": "total.txt",
    "esperado": "14 + 9 = 23"
  },
  {
    "tipo": "existe",
    "arquivo": "notas/nota.txt",
    "conteudo": "Nota conferida."
  },
  {
    "tipo": "naoExiste",
    "arquivo": "entrada/nota.txt"
  },
  {
    "tipo": "conteudo",
    "arquivo": "conferencia.txt",
    "esperado": "Status: concluído"
  }
];

function validar({ rodarChecks }) {
  rodarChecks("13", checks);
}

module.exports = { validar };
