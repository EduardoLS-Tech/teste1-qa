import authenticationElements from '../../elements/authentication/authenticationElements'

class loginPage {

  clickAcessButton() {
    cy.get(authenticationElements.acessButton).click()
  }

  validateRequiredField() {
    cy.get(authenticationElements.requiredField).should('be.visible').and('contain', 'É campo obrigatório')
    return cy.get(authenticationElements.requiredField)
  }

validateInvalidField() {
  cy.get('#modalText').should('be.visible').and('contain.text', 'Usuário ou senha inválido');
  return cy.get(authenticationElements.invalidField)
}

  validateRedirectHome() {
    cy.url({ timeout: 10000 }).should('include', '/home')
  }
  
  ValidateBalanceAccount() {

  }

}

export default new loginPage()
