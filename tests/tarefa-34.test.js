const checks = [
  {
    "tipo": "conteudo",
    "arquivo": "aviso.txt",
    "esperado": "Status: concluído"
  },
  {
    "tipo": "existe",
    "arquivo": "comunicado.md",
    "conteudo": "# Comunicado interno"
  },
  {
    "tipo": "naoExiste",
    "arquivo": "comunicadoo.md"
  },
  {
    "tipo": "conteudo",
    "arquivo": "mural.md",
    "esperado": "# Mural interno"
  }
];

function validar({ rodarChecks }) {
  rodarChecks("34", checks);
}

module.exports = { validar };
