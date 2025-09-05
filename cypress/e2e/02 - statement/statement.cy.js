describe("Extrato da BUGBank - Validação de dados e valores", () => {
  const userEmailMil = "qamil@teste.com";
  const userEmailZerado = "qazerado@teste.com";
  const userPassword = "senha123";

  context("Validação de valores de conta ao criar usuários", () => {
    beforeEach(() => cy.visit("/"));

    it("Dado que o usuário deixa opção de saldo ativa, Quando cadastra, Então a conta deve ser criada com R$ 1.000,00", () => {
      cy.createUser("QA Teste Mil", userEmailMil, userPassword, true, true); // closeModal = true, addBalance = true
      cy.loginUser(userEmailMil, userPassword, true);
      cy.contains("R$ 1.000,00").should("be.visible");
    });

    it("Dado que o usuário deixa opção de saldo inativa, Quando cadastra, Então a conta deve ser criada com R$ 0,00", () => {
      cy.createUser("QA Teste Zerado", userEmailZerado, userPassword, true, false); // addBalance = false
      cy.loginUser(userEmailZerado, userPassword, true);
      cy.contains("R$ 0,00").should("be.visible");
    });
  });
});
