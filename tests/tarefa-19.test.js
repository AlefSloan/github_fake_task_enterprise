const checks = [
  {
    "tipo": "conteudo",
    "arquivo": "implantacao.txt",
    "esperado": "Produto: Integra Fácil"
  },
  {
    "tipo": "existe",
    "arquivo": "check-in.txt",
    "conteudo": "Check-in realizado."
  },
  {
    "tipo": "existe",
    "arquivo": "roteiro_implantacao.txt",
    "conteudo": "Roteiro de implantação."
  },
  {
    "tipo": "naoExiste",
    "arquivo": "roteiro_implatacao.txt"
  }
];

function validar({ rodarChecks }) {
  rodarChecks("19", checks);
}

module.exports = { validar };
