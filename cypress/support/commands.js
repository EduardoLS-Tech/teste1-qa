import authenticationElements from "../support/elements/authentication/authenticationElements";

// Criação de usuário
Cypress.Commands.add("createUser", (name, email, password, closeModalAfter = true, addBalance = true) => {
  // Abrir modal de cadastro
  cy.get(authenticationElements.registerButton).click();

  // Preencher campos
  cy.get(authenticationElements.nameInput).type(name, { force: true });
  cy.get(authenticationElements.emailInput).type(email, { force: true });
  cy.get(authenticationElements.passwordInput).type(password, { force: true });
  cy.get(authenticationElements.confirmPasswordInput).type(password, {
    force: true,
  });

  // Toggle saldo conforme parâmetro
  cy.get(authenticationElements.toggleAddBalance).then(($el) => {
    if (($el.is(":checked") && !addBalance) || (!$el.is(":checked") && addBalance)) {
      cy.wrap($el).click({ force: true });
    }
  });

  cy.get(authenticationElements.submitRegisterButton).click({ force: true });

  if (closeModalAfter) {
    cy.get(authenticationElements.closeModal).should("exist").should("be.visible").click({ force: true });
  }
});

// Login de usuário
Cypress.Commands.add("loginUser", (email, password) => {
  // Garante que está na tela inicial
  cy.visit("/");

  // Preenche login
  cy.get(authenticationElements.emailInputLogin).type(email, { force: true });
  cy.get(authenticationElements.passwordInputLogin).type(password, { force: true });
  cy.get(authenticationElements.acessButton).click({ force: true });
});

// Valida que há um valor maior que 0 em conta
Cypress.Commands.add("validateBalanceGreaterThanZero", () => {
  cy.get("#textBalance > span", { timeout: 10000 }) // espera até 10s caso o saldo demore a carregar
    .should("not.be.empty") // garante que existe algum texto
    .invoke("text")
    .then((text) => {
      cy.log("Saldo capturado:", text);
      const cleanText = text.replace(/[^\d,]/g, "").replace(",", "."); // remove tudo que não é número e converte vírgula
      const numericValue = parseFloat(cleanText);
      expect(numericValue, `Valor convertido: ${cleanText}`).to.be.a("number").and.to.be.greaterThan(0);
    });
});

// Espera skeleton sumir
Cypress.Commands.add("waitForSkeleton", (skeletonSelector = ".skeleton-loader", timeout = 15000) => {
  cy.get("body").then(($body) => {
    if ($body.find(skeletonSelector).length > 0) {
      cy.get(skeletonSelector, { timeout }).should("be.visible");
      cy.get(skeletonSelector, { timeout }).should("not.exist");
    } else {
      cy.log("Nenhum skeleton encontrado, continuando...");
    }
  });
});

export default authenticationElements;
