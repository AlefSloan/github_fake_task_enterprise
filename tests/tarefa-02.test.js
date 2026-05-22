const checks = [
  {
    "tipo": "existe",
    "arquivo": "relatorio_janeiro.txt",
    "conteudo": "Relatório de janeiro."
  },
  {
    "tipo": "naoExiste",
    "arquivo": "relatorio_janero.txt"
  },
  {
    "tipo": "conteudo",
    "arquivo": "produto.txt",
    "esperado": "Produto: Nuvem Box"
  },
  {
    "tipo": "json",
    "arquivo": "produto.json",
    "chave": "preco",
    "esperado": 59
  }
];

function validar({ rodarChecks }) {
  rodarChecks("02", checks);
}

module.exports = { validar };
