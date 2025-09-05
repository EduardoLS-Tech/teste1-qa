import authenticationElements from "../../elements/authentication/authenticationElements";

class RegisterPage {
  openModal() {
    cy.get(authenticationElements.registerButton).click();
    cy.get(authenticationElements.nameInput, { timeout: 10000 }).should("exist");
  }

  fillName(name) {
    cy.get(authenticationElements.nameInput).clear({ force: true }).type(name, { force: true });
  }

  fillEmail(email) {
    cy.get(authenticationElements.emailInput).clear({ force: true }).type(email, { force: true });
  }

  fillPassword(password) {
    cy.get(authenticationElements.passwordInput).clear({ force: true }).type(password, { force: true });
  }

  fillConfirmPassword(password) {
    cy.get(authenticationElements.confirmPasswordInput).clear({ force: true }).type(password, { force: true });
  }
  validateEmptyNameField() {
    cy.get("#modalText").should("be.visible").and("contain.text", "Nome não pode ser vazio.");
    return cy.get(authenticationElements.invalidField);
  }
  validatePassowrdFailed() {
    cy.get("#modalText").should("be.visible").and("contain.text", "As senhas não são iguais.");
    return cy.get(authenticationElements.invalidField);
  }

  validateRequiredField() {
    cy.get(authenticationElements.messageRequiredField).should("exist");
    return cy.get(authenticationElements.messageRequiredField);
  }

  toggleAddBalance(active = true) {
    cy.get(authenticationElements.toggleAddBalance).then(($el) => {
      if (($el.is(":checked") && !active) || (!$el.is(":checked") && active)) {
        cy.wrap($el).click({ force: true });
      }
    });
  }

  submit() {
    cy.get(authenticationElements.submitRegisterButton).click({ force: true });
  }

  closeModal() {
    cy.get(authenticationElements.closeModal).click({ force: true });
  }

  captureAccountNumber() {
    // Captura o texto do modal
    cy.get("#modalText", { timeout: 7000 })
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log("Texto do modal:", text);

        // Extrai só os números (ex: "1234" de "A conta 123-4 foi criada com sucesso")
        const match = text.match(/\d+/g);
        const accountNumber = match ? match.join("") : null;

        expect(accountNumber, "Número da conta deve ser capturado").to.not.be.null;

        cy.log("Conta criada:", accountNumber);
      });
  }
}

export default new RegisterPage();
