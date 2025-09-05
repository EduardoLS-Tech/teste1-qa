import authenticationElements from "../../elements/authentication/authenticationElements";

class loginPage {
  clickAcessButton() {
    cy.get(authenticationElements.acessButton).click();
  }

  validateRequiredField() {
    cy.get(authenticationElements.requiredField).should("be.visible").and("contain", "É campo obrigatório");
    return cy.get(authenticationElements.requiredField);
  }

  validateInvalidField(expectedText = "Usuário ou senha inválido. Tente novamente ou verifique suas informações!") {
    return cy
      .get(authenticationElements.invalidConfirmPasswordField, { timeout: 5000 })
      .should("exist")
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        const normalizedText = text.replace(/\s+/g, " ").trim(); // remove quebras e espaços extras
        const normalizedExpected = expectedText.replace(/\s+/g, " ").trim();
        expect(normalizedText).to.contain(normalizedExpected);
      });
  }

  validateRedirectHome() {
    cy.url({ timeout: 10000 }).should("include", "/home");
  }
}

export default new loginPage();
