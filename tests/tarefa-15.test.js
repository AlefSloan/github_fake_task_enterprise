const checks = [
  {
    "tipo": "conteudo",
    "arquivo": "funcionario.txt",
    "esperado": "Funcionário: Bruno Melo"
  },
  {
    "tipo": "conteudo",
    "arquivo": "calculo.txt",
    "esperado": "18 + 4 = 22"
  },
  {
    "tipo": "json",
    "arquivo": "dados.json",
    "chave": "ano",
    "esperado": 2026
  }
];

function validar({ rodarChecks }) {
  rodarChecks("15", checks);
}

module.exports = { validar };
