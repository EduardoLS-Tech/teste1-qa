# 🧪 Testes Automatizados - BugBank (Cypress)

Este projeto contém uma suíte de testes automatizados desenvolvida em **Cypress**, estruturada com o padrão **Page Object Model (POM)** para garantir **clareza, escalabilidade e fácil manutenção** do código.

> ⚠️ A funcionalidade de **transferência** está temporariamente fora do ar, o que limita a cobertura total dos cenários de **extratos e movimentações**.

---

## 📋 Cobertura de Testes

Foram desenvolvidos **12 testes automatizados**, distribuídos entre as principais telas do BugBank:

- **Tela de Cadastro:** 6 testes  
- **Tela de Login:** 4 testes  
- **Tela da Dashboard:** 2 testes  

---

## 🧱 Estrutura de Pastas

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
⚙️ Tipos de Testes Implementados
End-to-End (E2E): valida fluxos completos do usuário — login → depósito → extrato.

UI / Funcionais: garante a integridade visual e funcional de elementos, botões e mensagens.

Negativos / Edge Cases: cobre cenários inválidos, como login incorreto, saldo insuficiente e usuários inexistentes.

🎯 Objetivo do Projeto
Validar o funcionamento dos fluxos críticos da aplicação BugBank, assegurando:

Confiabilidade nas principais funcionalidades.

Organização e modularidade da suíte de testes.

Facilidade de manutenção e evolução contínua do projeto.

▶️ Como Executar os Testes
Instale as dependências:

bash
Copiar código
npm install
Execute os testes no modo interativo:

bash
Copiar código
npx cypress open
Ou em modo headless:

bash
Copiar código
npx cypress run


🧩 Tecnologias Utilizadas
Cypress — Framework de testes E2E

JavaScript (ES6+)

Faker.js — Geração dinâmica de dados

Node.js — Ambiente de execução

🚧 Limitações Conhecidas
Módulo de transferência indisponível, impedindo testes E2E completos com esse fluxo.

Cenários de extrato parcialmente cobertos devido à dependência do módulo acima.
Garantir que os **fluxos críticos do BugBank** funcionem corretamente, mantendo a suíte de testes **organizada, escalável e fácil de manter**.
