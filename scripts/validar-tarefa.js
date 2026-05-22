const { execSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

function descobrirBranch() {
  if (process.env.TASK_BRANCH && process.env.TASK_BRANCH.trim()) return process.env.TASK_BRANCH.trim();
  if (process.env.GITHUB_HEAD_REF && process.env.GITHUB_HEAD_REF.trim()) return process.env.GITHUB_HEAD_REF.trim();

  try {
    return execSync("git branch --show-current", { encoding: "utf8" }).trim();
  } catch {
    console.error("❌ Não foi possível descobrir a branch atual.");
    console.error("Use TASK_BRANCH=tarefa-07 npm test para testar manualmente.");
    process.exit(1);
  }
}

function valor(valor) {
  return typeof valor === "string" ? `"${valor}"` : JSON.stringify(valor);
}

function falhar(tarefa, esperado, encontrado) {
  throw new Error(
    `❌ Tarefa ${tarefa} falhou.\n` +
    `Esperado: ${esperado}\n` +
    `Encontrado: ${encontrado}\n\n` +
    "Verifique o README da sua tarefa e tente novamente."
  );
}

function caminhoDaTarefa(tarefa, arquivo) {
  return path.join(process.cwd(), "tarefas", `tarefa-${tarefa}`, arquivo);
}

function validarConteudo({ tarefa, arquivo, esperado }) {
  const caminho = caminhoDaTarefa(tarefa, arquivo);
  if (!fs.existsSync(caminho)) falhar(tarefa, `o arquivo \`${arquivo}\` deveria existir.`, "arquivo não encontrado");
  const atual = fs.readFileSync(caminho, "utf8").trim();
  if (atual !== esperado) falhar(tarefa, `o arquivo \`${arquivo}\` deveria conter ${valor(esperado)}.`, valor(atual));
}

function validarExiste({ tarefa, arquivo, conteudo }) {
  const caminho = caminhoDaTarefa(tarefa, arquivo);
  if (!fs.existsSync(caminho)) falhar(tarefa, `o arquivo \`${arquivo}\` deveria existir.`, "arquivo não encontrado");
  if (conteudo !== undefined) {
    const atual = fs.readFileSync(caminho, "utf8").trim();
    if (atual !== conteudo) falhar(tarefa, `o arquivo \`${arquivo}\` deveria conter ${valor(conteudo)}.`, valor(atual));
  }
}

function validarNaoExiste({ tarefa, arquivo }) {
  if (fs.existsSync(caminhoDaTarefa(tarefa, arquivo))) {
    falhar(tarefa, `o arquivo \`${arquivo}\` não deveria mais existir neste local.`, "arquivo ainda existe");
  }
}

function validarJson({ tarefa, arquivo, chave, esperado }) {
  const caminho = caminhoDaTarefa(tarefa, arquivo);
  if (!fs.existsSync(caminho)) falhar(tarefa, `o arquivo \`${arquivo}\` deveria existir.`, "arquivo não encontrado");

  let dados;
  try {
    dados = JSON.parse(fs.readFileSync(caminho, "utf8"));
  } catch {
    falhar(tarefa, `o arquivo \`${arquivo}\` deveria ser um JSON válido.`, "JSON inválido");
  }

  if (dados[chave] !== esperado) {
    falhar(tarefa, `a chave \`${chave}\` em \`${arquivo}\` deveria ser ${valor(esperado)}.`, valor(dados[chave]));
  }
}

function rodarChecks(tarefa, checks) {
  for (const check of checks) {
    if (check.tipo === "conteudo") validarConteudo({ tarefa, ...check });
    if (check.tipo === "existe") validarExiste({ tarefa, ...check });
    if (check.tipo === "naoExiste") validarNaoExiste({ tarefa, ...check });
    if (check.tipo === "json") validarJson({ tarefa, ...check });
  }
}

const branch = descobrirBranch();
const match = branch.match(/^tarefa-(\d{2})$/);

if (!match) {
  console.error("❌ Nome de branch inválido.");
  console.error(`Branch encontrada: ${branch || "não identificada"}`);
  console.error("Use exatamente o padrão tarefa-XX, por exemplo: tarefa-07.");
  process.exit(1);
}

const numero = match[1];
const arquivoTeste = path.join(process.cwd(), "tests", `tarefa-${numero}.test.js`);

if (!fs.existsSync(arquivoTeste)) {
  console.error(`❌ Não existe teste para a branch tarefa-${numero}.`);
  console.error("Confira se o número da tarefa está correto e tente novamente.");
  process.exit(1);
}

try {
  const teste = require(arquivoTeste);
  if (!teste || typeof teste.validar !== "function") {
    throw new Error(`O arquivo tests/tarefa-${numero}.test.js não exporta uma função validar().`);
  }

  teste.validar({ rodarChecks });
  console.log(`✅ Tarefa ${numero} passou na validação.`);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
