const checks = [
  {
    "tipo": "conteudo",
    "arquivo": "instrutor.txt",
    "esperado": "Instrutor: Carla Souza"
  },
  {
    "tipo": "existe",
    "arquivo": "presenca.txt",
    "conteudo": "Presença confirmada."
  },
  {
    "tipo": "conteudo",
    "arquivo": "treinamento.md",
    "esperado": "# Treinamento interno"
  }
];

function validar({ rodarChecks }) {
  rodarChecks("21", checks);
}

module.exports = { validar };
