# Testes Automatizados - BugBank (Cypress)

Este projeto contém uma suíte de testes automatizados desenvolvida em **Cypress**, estruturada com o padrão **Page Object Model (POM)** para garantir clareza, escalabilidade e fácil manutenção do código.

> A funcionalidade de **transferência** está temporariamente fora do ar, o que limita a cobertura total dos cenários de extratos e movimentações.

---

## Cobertura de Testes

Foram implementados **12 testes automatizados**, distribuídos entre as principais funcionalidades do BugBank:

- **Tela de Cadastro:** 6 testes  
- **Tela de Login:** 4 testes  
- **Tela da Dashboard:** 2 testes  

---

## Estrutura de Pastas

```bash
cypress/
├── e2e/                    # Testes organizados por domínio de negócio
│   ├── authentication/     # Testes de login e cadastro
│   │   ├── login.cy.js
│   │   └── signup.cy.js
│   ├── transactions/       # Testes de depósitos e transferências (indisponível no momento)
│   │   ├── deposit.cy.js
│   │   └── transfer.cy.js
│   └── statement/          # Testes de extrato e histórico de transações
│       └── statement.cy.js
│
├── fixtures/               # Massa de dados estática (usuários, transações)
│   ├── users.json
│   └── transactions.json
│
├── support/
│   ├── pageObjects/        # Classes encapsulando elementos e ações de cada página
│   │   ├── Authentication/
│   │   │   ├── LoginPage.js
│   │   │   └── SignupPage.js
│   │   ├── Dashboard/
│   │   │   ├── HomePage.js
│   │   │   └── StatementPage.js
│   │   └── Transactions/
│   │       ├── DepositPage.js
│   │       └── TransferPage.js
│   │
│   ├── utils/              # Funções auxiliares e chamadas de API
│   │   ├── fakerUtils.js
│   │   └── apiUtils.js
│   │
│   └── commands.js         # Comandos customizados e reutilizáveis do Cypress
│
├── config/                 # Configurações e variáveis de ambiente
│   ├── env.config.js
│   └── test.config.js
│
└── cypress.config.js       # Configuração principal do Cypress

```
Tipos de Testes Implementados:

 - End-to-End (E2E): valida fluxos completos do usuário — login → depósito → extrato.

- UI / Funcionais: assegura a integridade visual e funcional de elementos, botões e mensagens.

- Negativos / Edge Cases: cobre cenários inválidos, como login incorreto, saldo insuficiente e usuários inexistentes.

---
 Objetivo do Projeto:

Assegurar o funcionamento correto e consistente dos fluxos críticos do BugBank, por meio de uma suíte de testes automatizados que seja:

- Confiável: garante a validação completa das principais funcionalidades do sistema, reduzindo falhas em produção.

- Organizada: segue uma arquitetura modular baseada em domínios de negócio e no padrão Page Object Model (POM), facilitando a leitura e manutenção.

- Escalável: permite a rápida inclusão de novos cenários e funcionalidades, acompanhando a evolução contínua da aplicação.

---

# Clonar o repositório:

- git clone https://github.com/seu-usuario/bugbank-cypress.git

- Acessar pasta do projeto: cd bugbank-cypress

- Instalar as dependências: npm install

# Configurar o ambiente:

Edite o arquivo config/env.config.js e ajuste as variáveis de ambiente conforme o contexto (por exemplo, baseUrl, timeout e apiUrl).

É possível criar múltiplos ambientes (dev, staging, prod) dentro da pasta config/.

# Executar os testes:

- Modo interativo (interface Cypress): npx cypress open

- Modo headless (sem interface, ideal para CI/CD): npx cypress run

---

Tecnologias Utilizadas

- Cypress — Framework de testes E2E

- JavaScript (ES6+)

- Faker.js — Geração dinâmica de dados

- Node.js — Ambiente de execução

---

Limitações Conhecidas
O módulo de transferência encontra-se indisponível, impedindo a execução completa de alguns fluxos E2E.

Os testes de extrato estão parcialmente limitados devido à dependência dessa funcionalidade.

---

Conclusão
Este projeto visa garantir a qualidade e estabilidade do BugBank por meio de uma suíte de testes automatizada, modular e de fácil manutenção, servindo como base sólida para futuras implementações e integração contínua (CI/CD).
