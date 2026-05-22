const checks = [
  {
    "tipo": "conteudo",
    "arquivo": "reembolso.txt",
    "esperado": "60 + 15 = 75"
  },
  {
    "tipo": "conteudo",
    "arquivo": "funcionario.txt",
    "esperado": "Funcionário: Diego Rocha"
  },
  {
    "tipo": "existe",
    "arquivo": "reembolsos/recibo.txt",
    "conteudo": "Recibo de reembolso."
  },
  {
    "tipo": "naoExiste",
    "arquivo": "entrada/recibo.txt"
  }
];

function validar({ rodarChecks }) {
  rodarChecks("33", checks);
}

module.exports = { validar };
