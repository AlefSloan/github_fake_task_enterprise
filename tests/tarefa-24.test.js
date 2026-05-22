const checks = [
  {
    "tipo": "existe",
    "arquivo": "cadastro_suporte.txt",
    "conteudo": "Cadastro de suporte."
  },
  {
    "tipo": "naoExiste",
    "arquivo": "cadastro_suportee.txt"
  },
  {
    "tipo": "conteudo",
    "arquivo": "triagem.txt",
    "esperado": "Status: concluído"
  },
  {
    "tipo": "conteudo",
    "arquivo": "cliente.txt",
    "esperado": "Cliente: Prisma Corporação"
  }
];

function validar({ rodarChecks }) {
  rodarChecks("24", checks);
}

module.exports = { validar };
