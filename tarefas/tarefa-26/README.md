# Tarefa 26

O time de produto está padronizando documentos de versão.

## O que fazer

1. Corrija o nome do produto no arquivo `versao.txt`.
2. Renomeie `notas_versaoo.md` para `notas_versao.md`.
3. Corrija o valor de `versaoMenor` no arquivo `versao.json` para `2`.

## Arquivos envolvidos

- `versao.txt`
- `notas_versaoo.md`
- `notas_versao.md`
- `versao.json`

## Para passar na validação automática

- O arquivo `versao.txt` deve conter exatamente: `Produto: Central Relatórios`
- O arquivo `notas_versao.md` deve existir e conter exatamente: `# Notas da versão`
- O arquivo `notas_versaoo.md` não deve mais existir neste local.
- No arquivo `versao.json`, o campo `versaoMenor` deve ter o valor `2`.
- Nenhum arquivo fora de `tarefas/tarefa-26` deve ser alterado.

A validação será feita automaticamente quando o Pull Request for aberto no GitHub.

## Lembrete

Mexa apenas nos arquivos desta tarefa. As outras pastas pertencem a outros colegas.
