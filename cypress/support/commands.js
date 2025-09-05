import authenticationElements from '../support/elements/authentication/authenticationElements'



Cypress.Commands.add("createUser", (name, email, password) => {
// Preenche os campos do formulário de cadastro de forma estática
  cy.get(authenticationElements.registerButton).click()
  cy.get(authenticationElements.nameInput).type(name, { force: true })
  cy.get(authenticationElements.emailInput).type(email, { force: true })
  cy.get(authenticationElements.passwordInput).type(password, { force: true })
  cy.get(authenticationElements.confirmPasswordInput).type(password, { force: true })
  cy.get(authenticationElements.toggleAddBalance).click({ force: true })
  cy.get(authenticationElements.submitRegisterButton).click({ force: true }) 
  cy.get(authenticationElements.closeModal).click({ force: true }) 
})

// Realiza login
Cypress.Commands.add("loginUser", (email, password) => {
  cy.get(authenticationElements.emailInputLogin).type(email, { force: true })
  cy.get(authenticationElements.passwordInputLogin).type(password, { force: true })
  cy.get(authenticationElements.acessButton).click({ force: true })

})
// Valida que á um valor maior que 0 em conta
Cypress.Commands.add('validateBalanceGreaterThanZero', () => {
cy.get('#textBalance > span', { timeout: 10000 }) // espera até 10s caso o saldo demore a carregar
  .should('not.be.empty')                         // garante que existe algum texto
  .invoke('text')
  .then(text => {
    cy.log('Saldo capturado:', text);
    const cleanText = text.replace(/[^\d,]/g, '').replace(',', '.'); // remove tudo que não é número e converte vírgula
    const numericValue = parseFloat(cleanText);
    expect(numericValue, `Valor convertido: ${cleanText}`).to.be.a('number').and.to.be.greaterThan(0);
  });

  Cypress.Commands.add('waitForSkeleton', (skeletonSelector = '.skeleton-loader', timeout = 15000) => {
    // Aguarda o skeleton aparecer (opcional, mas garante que o loading começou)
  cy.get(skeletonSelector, { timeout }).should('be.visible');

  // Aguarda o skeleton desaparecer
  cy.get(skeletonSelector, { timeout }).should('not.exist');
});
  
});

export default authenticationElements















