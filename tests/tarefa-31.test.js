const checks = [
  {
    "tipo": "conteudo",
    "arquivo": "contato.txt",
    "esperado": "Cliente: Horizonte Digital"
  },
  {
    "tipo": "conteudo",
    "arquivo": "retorno.txt",
    "esperado": "Status: concluído"
  },
  {
    "tipo": "conteudo",
    "arquivo": "historico.md",
    "esperado": "# Histórico de contato"
  }
];

function validar({ rodarChecks }) {
  rodarChecks("31", checks);
}

module.exports = { validar };
