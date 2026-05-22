const checks = [
  {
    "tipo": "conteudo",
    "arquivo": "fornecedor.txt",
    "esperado": "Fornecedor: Papelaria Estrela"
  },
  {
    "tipo": "existe",
    "arquivo": "contratos/contrato.txt",
    "conteudo": "Contrato de fornecedor."
  },
  {
    "tipo": "naoExiste",
    "arquivo": "entrada/contrato.txt"
  },
  {
    "tipo": "existe",
    "arquivo": "cadastro_fornecedor.txt",
    "conteudo": "Cadastro de fornecedor."
  },
  {
    "tipo": "naoExiste",
    "arquivo": "cadastro_fornecedro.txt"
  }
];

function validar({ rodarChecks }) {
  rodarChecks("29", checks);
}

module.exports = { validar };
