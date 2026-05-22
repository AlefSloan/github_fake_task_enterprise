# Tarefa 08

O time de operações está organizando arquivos recebidos.

## O que fazer

1. Mova `entrada/pedido.txt` para `processados/pedido.txt`.
2. Altere o status em `pedido-status.txt` para `concluído`.
3. Corrija o valor de `quantidade` no arquivo `pedido.json` para `5`.

## Arquivos envolvidos

- `entrada/pedido.txt`
- `processados/pedido.txt`
- `pedido-status.txt`
- `pedido.json`

## Para passar na validação automática

- O arquivo `processados/pedido.txt` deve existir e conter exatamente: `Pedido 108.`
- O arquivo `entrada/pedido.txt` não deve mais existir neste local.
- O arquivo `pedido-status.txt` deve conter exatamente: `Status: concluído`
- No arquivo `pedido.json`, o campo `quantidade` deve ter o valor `5`.
- Nenhum arquivo fora de `tarefas/tarefa-08` deve ser alterado.

A validação será feita automaticamente quando o Pull Request for aberto no GitHub.

## Lembrete

Mexa apenas nos arquivos desta tarefa. As outras pastas pertencem a outros colegas.
