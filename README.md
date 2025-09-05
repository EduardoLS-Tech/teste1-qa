# Testes Cypress do BugBank
Funcionalidade de transferência fora do ar, impossibilitando a cobertura deste fluxo e limitando os cenários de extratos.


Testes automatizados do **BugBank** usando **Cypress** com **Page Object Model (POM)**, garantindo manutenção, escalabilidade e clareza.
```
Desenvolvido 12 testes
Tela de Casdastro: 6 testes
Tela de Login: 4 testes
Tela da Dashboard: 2 testes

```

## Estrutura de Pastas

```
cypress/
├── e2e/                  → Testes organizados por domínio de negócio
│   ├── authentication/   → Testes de login e cadastro
│   │   ├── login.cy.js
│   ├── transactions/     → Testes de depósitos e transferências // Indiposnivel para realização testes
│   │   ├── deposit.cy.js
│   │   └── transfer.cy.js
│   └── statement/        → Testes de extrato e histórico de transações
│       └── statement.cy.js
├── fixtures/             → Massa de dados estática (usuários, transações)
│   ├── users.json
│   └── transactions.json
├── support/
│   ├── pageObjects/      → Classes de páginas encapsulando elementos e ações
│   │   ├── Authentication/
│   │   │   ├── LoginPage.js
│   │   │   └── SignupPage.js
│   │   ├── Dashboard/
│   │   │   ├── HomePage.js
│   │   │   └── StatementPage.js
│   │   └── Transactions/
│   │       ├── DepositPage.js
│   │       └── TransferPage.js
│   ├── utils/            → Funções auxiliares e chamadas de API
│   │   ├── fakerUtils.js
│   │   └── apiUtils.js
│   └── commands.js       → Comandos Cypress customizados e reutilizáveis
├── config/               → Variáveis de ambiente e configurações de teste
│   ├── env.config.js
│   └── test.config.js
└── cypress.config.js     → Configuração principal do Cypress
```

---

## Tipos de Testes

- **End-to-End (E2E):** Fluxos completos do usuário (login → transferência → extrato)
- **UI / Funcionais:** Validação de elementos, botões e mensagens
- **Negativos / Edge Cases:** Cenários inválidos, como login incorreto, saldo insuficiente ou usuário inexistente
- **Preparação via API:** Criação ou reset de dados para testes independentes e reproduzíveis

---

## Objetivo

Garantir que os **fluxos críticos do BugBank** funcionem corretamente, mantendo a suíte de testes **organizada, escalável e fácil de manter**.
