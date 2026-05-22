# Tarefa 18

O setor financeiro organizou uma pasta de pagamentos.

## O que fazer

1. Mova `pendentes/comprovante.txt` para `pagos/comprovante.txt`.
2. Corrija o valor de `valor` no arquivo `pagamento.json` para `190`.
3. Altere o status em `pagamento.txt` para `concluído`.

## Arquivos envolvidos

- `pendentes/comprovante.txt`
- `pagos/comprovante.txt`
- `pagamento.json`
- `pagamento.txt`

## Para passar na validação automática

- O arquivo `pagos/comprovante.txt` deve existir e conter exatamente: `Comprovante 18.`
- O arquivo `pendentes/comprovante.txt` não deve mais existir neste local.
- No arquivo `pagamento.json`, o campo `valor` deve ter o valor `190`.
- O arquivo `pagamento.txt` deve conter exatamente: `Status: concluído`
- Nenhum arquivo fora de `tarefas/tarefa-18` deve ser alterado.

A validação será feita automaticamente quando o Pull Request for aberto no GitHub.

## Lembrete

Mexa apenas nos arquivos desta tarefa. As outras pastas pertencem a outros colegas.
