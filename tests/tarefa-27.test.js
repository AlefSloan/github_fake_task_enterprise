const checks = [
  {
    "tipo": "existe",
    "arquivo": "planejamento/cronograma.txt",
    "conteudo": "Cronograma do projeto."
  },
  {
    "tipo": "naoExiste",
    "arquivo": "rascunhos/cronograma.txt"
  },
  {
    "tipo": "conteudo",
    "arquivo": "dias.txt",
    "esperado": "10 + 5 = 15"
  },
  {
    "tipo": "conteudo",
    "arquivo": "projeto.md",
    "esperado": "# Projeto interno"
  }
];

function validar({ rodarChecks }) {
  rodarChecks("27", checks);
}

module.exports = { validar };
