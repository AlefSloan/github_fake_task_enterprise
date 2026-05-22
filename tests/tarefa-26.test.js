const checks = [
  {
    "tipo": "conteudo",
    "arquivo": "versao.txt",
    "esperado": "Produto: Central Relatórios"
  },
  {
    "tipo": "existe",
    "arquivo": "notas_versao.md",
    "conteudo": "# Notas da versão"
  },
  {
    "tipo": "naoExiste",
    "arquivo": "notas_versaoo.md"
  },
  {
    "tipo": "json",
    "arquivo": "versao.json",
    "chave": "versaoMenor",
    "esperado": 2
  }
];

function validar({ rodarChecks }) {
  rodarChecks("26", checks);
}

module.exports = { validar };
