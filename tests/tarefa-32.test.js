const checks = [
  {
    "tipo": "existe",
    "arquivo": "ambiente_producao.txt",
    "conteudo": "Ambiente de produção."
  },
  {
    "tipo": "naoExiste",
    "arquivo": "ambiente_producaoo.txt"
  },
  {
    "tipo": "existe",
    "arquivo": "responsavel.txt",
    "conteudo": "Responsável definido."
  },
  {
    "tipo": "json",
    "arquivo": "ambiente.json",
    "chave": "portas",
    "esperado": 3
  }
];

function validar({ rodarChecks }) {
  rodarChecks("32", checks);
}

module.exports = { validar };
