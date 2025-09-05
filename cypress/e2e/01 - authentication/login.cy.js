import loginPage from '../../support/pages/authentication/loginPage'

describe('Login - BugBank', () => {

beforeEach(() => {
  cy.visit("/") 

})

  it('Dado que o usuário não preenche os campos obrigatórios, Quando tenta fazer login, Então exibe mensagem de campo obrigatório', () => {
    loginPage.clickAcessButton()
    loginPage.validateRequiredField()
  })

  it('Dado que o usuário é inválido ou não cadastrado, Quando tenta acessar a aplicação, Então o acesso não é autorizado', () => {
    cy.loginUser("usuario@teste.com", "senha128")
    loginPage.validateInvalidField()
    
  })

  it('Dado que o usuário é válido e cadastrado, Quando realiza login com dados corretos, Então é redirecionado para a home page', () => {
    cy.createUser("Usuário Teste", "usuario@teste.com", "senha123")
    cy.loginUser("usuario@teste.com", "senha123")
    loginPage.validateRedirectHome()
  })

  it('Dado que o usuário seleciona saldo inicial, Quando conclui o cadastro, Então a conta é criada com saldo visível na home', () => {
   cy.createUser("Usuário Teste", "usuario@teste.com", "senha180")
   cy.loginUser("usuario@teste.com", "senha180")
   loginPage.validateRedirectHome()
   cy.validateBalanceGreaterThanZero();
  })


})