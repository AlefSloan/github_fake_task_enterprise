const checks = [
  {
    "tipo": "conteudo",
    "arquivo": "chamado.txt",
    "esperado": "Status: concluído"
  },
  {
    "tipo": "existe",
    "arquivo": "fechamento.txt",
    "conteudo": "Chamado fechado."
  },
  {
    "tipo": "conteudo",
    "arquivo": "cliente.txt",
    "esperado": "Cliente: Atlas Serviços"
  }
];

function validar({ rodarChecks }) {
  rodarChecks("16", checks);
}

module.exports = { validar };
