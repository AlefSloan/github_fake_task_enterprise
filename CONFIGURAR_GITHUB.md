# Configurar GitHub para a oficina

Este arquivo é apenas para o professor. O bloqueio de push direto na `main` precisa ser configurado no GitHub, nas configurações do repositório, usando branch protection rules ou rulesets.

## Passos recomendados

1. Crie o repositório no GitHub.
2. Envie este projeto para a branch `main`.
3. Adicione os alunos como colaboradores temporários.
4. Crie uma regra para proteger a branch `main`.
5. Exija Pull Request antes de permitir merge na `main`.
6. Exija que o GitHub Actions passe antes do merge, se possível.
7. Remova os colaboradores após a oficina.
