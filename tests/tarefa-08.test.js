const checks = [
  {
    "tipo": "existe",
    "arquivo": "processados/pedido.txt",
    "conteudo": "Pedido 108."
  },
  {
    "tipo": "naoExiste",
    "arquivo": "entrada/pedido.txt"
  },
  {
    "tipo": "conteudo",
    "arquivo": "pedido-status.txt",
    "esperado": "Status: concluído"
  },
  {
    "tipo": "json",
    "arquivo": "pedido.json",
    "chave": "quantidade",
    "esperado": 5
  }
];

function validar({ rodarChecks }) {
  rodarChecks("08", checks);
}

module.exports = { validar };
