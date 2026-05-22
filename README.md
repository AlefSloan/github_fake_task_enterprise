# Oficina prática de Git e GitHub

Este repositório simula uma pequena startup de software corrigindo documentos, nomes de arquivos e pequenos problemas internos. A ideia é praticar Git e GitHub em um cenário parecido com um repositório de empresa, sem precisar programar.

## Objetivo da atividade

Cada aluno receberá uma tarefa isolada, fará três correções simples dentro da pasta da própria tarefa e abrirá um Pull Request para a `main`. O GitHub Actions vai validar automaticamente se a tarefa sorteada foi concluída corretamente.

## Fluxo da oficina

1. Clone este repositório.
2. Crie uma branch com o número da sua tarefa.
3. Abra a pasta da tarefa sorteada e leia o README interno.
4. Faça as três pequenas correções solicitadas.
5. Use `git status` para conferir as alterações.
6. Use `git add` para preparar os arquivos.
7. Faça um commit usando Conventional Commit simples.
8. Envie sua branch com `git push`.
9. Abra um Pull Request para a branch `main`.
10. Aguarde o GitHub Actions validar sua tarefa automaticamente.

## Padrão obrigatório de branch

A branch deve ter exatamente o nome da tarefa:

```bash
tarefa-01
tarefa-02
tarefa-03
...
tarefa-35
```

Não use prefixos como `fix/`, `feature/` ou nomes pessoais.

## Padrão recomendado de commit

Use Conventional Commit simples. Este padrão será recomendado, mas não será validado automaticamente.

Exemplos:

```bash
fix(tarefa-01): corrige informações da tarefa
fix(tarefa-02): ajusta arquivos da tarefa
fix(tarefa-15): corrige dados internos
```

## Tarefas disponíveis

| Tarefa | Pasta | Resumo |
| --- | --- | --- |
| 01 | `tarefas/tarefa-01` | cliente, conta e status |
| 02 | `tarefas/tarefa-02` | arquivo, produto e JSON |
| 03 | `tarefas/tarefa-03` | mover, criar e Markdown |
| 04 | `tarefas/tarefa-04` | funcionário, status e arquivo |
| 05 | `tarefas/tarefa-05` | conta, JSON e texto |
| 06 | `tarefas/tarefa-06` | Markdown, criar e produto |
| 07 | `tarefas/tarefa-07` | cliente, conta e renomear |
| 08 | `tarefas/tarefa-08` | mover, status e JSON |
| 09 | `tarefas/tarefa-09` | cliente, Markdown e criar |
| 10 | `tarefas/tarefa-10` | status, conta e renomear |
| 11 | `tarefas/tarefa-11` | funcionário, mover e Markdown |
| 12 | `tarefas/tarefa-12` | produto, JSON e criar |
| 13 | `tarefas/tarefa-13` | conta, mover e status |
| 14 | `tarefas/tarefa-14` | JSON, cliente e Markdown |
| 15 | `tarefas/tarefa-15` | funcionário, conta e JSON |
| 16 | `tarefas/tarefa-16` | status, criar e cliente |
| 17 | `tarefas/tarefa-17` | renomear, Markdown e conta |
| 18 | `tarefas/tarefa-18` | mover, JSON e status |
| 19 | `tarefas/tarefa-19` | produto, criar e renomear |
| 20 | `tarefas/tarefa-20` | Markdown, status e JSON |
| 21 | `tarefas/tarefa-21` | funcionário, criar e Markdown |
| 22 | `tarefas/tarefa-22` | cliente, conta e JSON |
| 23 | `tarefas/tarefa-23` | mover, texto e criar |
| 24 | `tarefas/tarefa-24` | renomear, status e cliente |
| 25 | `tarefas/tarefa-25` | conta, Markdown e status |
| 26 | `tarefas/tarefa-26` | produto, renomear e JSON |
| 27 | `tarefas/tarefa-27` | mover, conta e Markdown |
| 28 | `tarefas/tarefa-28` | criar, status e JSON |
| 29 | `tarefas/tarefa-29` | texto, mover e renomear |
| 30 | `tarefas/tarefa-30` | Markdown, criar e conta |
| 31 | `tarefas/tarefa-31` | cliente, status e Markdown |
| 32 | `tarefas/tarefa-32` | renomear, criar e JSON |
| 33 | `tarefas/tarefa-33` | conta, texto e mover |
| 34 | `tarefas/tarefa-34` | status, renomear e Markdown |
| 35 | `tarefas/tarefa-35` | JSON, conta e cliente |

## Como começar sua tarefa

Abra a pasta da tarefa sorteada, por exemplo `tarefas/tarefa-07`, e leia o `README.md` que existe dentro dela. Ele explica exatamente quais três correções devem ser feitas e quais arquivos estão envolvidos.

Cada aluno deve mexer apenas na própria pasta de tarefa. Não altere arquivos de outras tarefas, porque cada Pull Request será validado de forma independente.

## Validação automática

Ao abrir um Pull Request para a `main`, o GitHub Actions identificará o nome da sua branch e rodará somente o teste da tarefa correspondente. Se a branch não seguir o padrão `tarefa-XX`, a validação falhará com uma mensagem amigável.

Os alunos não precisam rodar os testes manualmente. A validação acontece automaticamente no GitHub Actions quando o Pull Request é aberto.

Como este repositório começa com as tarefas propositalmente erradas, o GitHub Actions deve falhar até que o aluno faça as correções da própria tarefa.
