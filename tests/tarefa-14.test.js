const checks = [
  {
    "tipo": "json",
    "arquivo": "cliente.json",
    "chave": "id",
    "esperado": 141
  },
  {
    "tipo": "conteudo",
    "arquivo": "cliente.txt",
    "esperado": "Cliente: Norte Tech"
  },
  {
    "tipo": "conteudo",
    "arquivo": "registro.md",
    "esperado": "# Registro do cliente"
  }
];

function validar({ rodarChecks }) {
  rodarChecks("14", checks);
}

module.exports = { validar };
