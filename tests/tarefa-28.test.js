const checks = [
  {
    "tipo": "existe",
    "arquivo": "resposta-padrao.txt",
    "conteudo": "Resposta padrão criada."
  },
  {
    "tipo": "conteudo",
    "arquivo": "base.txt",
    "esperado": "Status: concluído"
  },
  {
    "tipo": "json",
    "arquivo": "artigo.json",
    "chave": "revisao",
    "esperado": 2
  }
];

function validar({ rodarChecks }) {
  rodarChecks("28", checks);
}

module.exports = { validar };
