const checks = [
  {
    "tipo": "conteudo",
    "arquivo": "funcionario.txt",
    "esperado": "Funcionário: Rafael Lima"
  },
  {
    "tipo": "conteudo",
    "arquivo": "onboarding.txt",
    "esperado": "Status: concluído"
  },
  {
    "tipo": "existe",
    "arquivo": "manual_onboard.txt",
    "conteudo": "Manual de onboarding."
  },
  {
    "tipo": "naoExiste",
    "arquivo": "manual_onbord.txt"
  }
];

function validar({ rodarChecks }) {
  rodarChecks("04", checks);
}

module.exports = { validar };
