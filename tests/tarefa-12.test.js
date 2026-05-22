const checks = [
  {
    "tipo": "conteudo",
    "arquivo": "catalogo.txt",
    "esperado": "Produto: App Vendas Pro"
  },
  {
    "tipo": "json",
    "arquivo": "catalogo.json",
    "chave": "estoque",
    "esperado": 12
  },
  {
    "tipo": "existe",
    "arquivo": "publicacao.txt",
    "conteudo": "Catálogo pronto."
  }
];

function validar({ rodarChecks }) {
  rodarChecks("12", checks);
}

module.exports = { validar };
