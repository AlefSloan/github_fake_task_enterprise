const checks = [
  {
    "tipo": "conteudo",
    "arquivo": "responsavel.txt",
    "esperado": "Responsável: Ana Clara"
  },
  {
    "tipo": "existe",
    "arquivo": "reunioes/ata.txt",
    "conteudo": "Ata da reunião."
  },
  {
    "tipo": "naoExiste",
    "arquivo": "rascunhos/ata.txt"
  },
  {
    "tipo": "conteudo",
    "arquivo": "pauta.md",
    "esperado": "# Pauta da reunião"
  }
];

function validar({ rodarChecks }) {
  rodarChecks("11", checks);
}

module.exports = { validar };
