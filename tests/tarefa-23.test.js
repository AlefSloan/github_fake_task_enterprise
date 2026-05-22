const checks = [
  {
    "tipo": "existe",
    "arquivo": "remessas/remessa.txt",
    "conteudo": "Remessa 23."
  },
  {
    "tipo": "naoExiste",
    "arquivo": "entrada/remessa.txt"
  },
  {
    "tipo": "conteudo",
    "arquivo": "transportadora.txt",
    "esperado": "Transportadora: Via Sul"
  },
  {
    "tipo": "existe",
    "arquivo": "confirmacao.txt",
    "conteudo": "Remessa confirmada."
  }
];

function validar({ rodarChecks }) {
  rodarChecks("23", checks);
}

module.exports = { validar };
