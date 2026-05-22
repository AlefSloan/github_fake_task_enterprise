const checks = [
  {
    "tipo": "existe",
    "arquivo": "pagos/comprovante.txt",
    "conteudo": "Comprovante 18."
  },
  {
    "tipo": "naoExiste",
    "arquivo": "pendentes/comprovante.txt"
  },
  {
    "tipo": "json",
    "arquivo": "pagamento.json",
    "chave": "valor",
    "esperado": 190
  },
  {
    "tipo": "conteudo",
    "arquivo": "pagamento.txt",
    "esperado": "Status: concluído"
  }
];

function validar({ rodarChecks }) {
  rodarChecks("18", checks);
}

module.exports = { validar };
