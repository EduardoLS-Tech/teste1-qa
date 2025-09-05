import registerPage from "../../support/pages/authentication/registerPage";

const genEmail = () => `qa_${Date.now()}_${Math.random().toString(16).slice(2)}@mail.com`;

describe("Cadastro - BugBank", () => {
  beforeEach(() => {
    cy.visit("/"); // URL base
    registerPage.openModal();
  });

  it("Dado que o usuário não preenche o nome, Quando tenta cadastrar, Então deve visualizar aviso de campo obrigatório", () => {
    registerPage.fillEmail(genEmail());
    registerPage.fillPassword("123456");
    registerPage.fillConfirmPassword("123456");
    registerPage.submit();
    registerPage.validateEmptyNameField();
  });

  it("Dado que o usuário não preenche o email, Quando tenta cadastrar, Então deve visualizar aviso de campo obrigatório", () => {
    registerPage.fillName("QA Test");
    registerPage.fillPassword("123456");
    registerPage.fillConfirmPassword("123456");
    registerPage.submit();
    registerPage.validateRequiredField();
  });

  it("Dado que o usuário não preenche a senha, Quando tenta cadastrar, Então deve visualizar aviso de campo obrigatório", () => {
    registerPage.fillName("QA Test");
    registerPage.fillEmail(genEmail());
    registerPage.fillConfirmPassword("123456");
    registerPage.submit();
    registerPage.validateRequiredField();
  });

  it("Dado que o usuário não preenche a confirmação de senha, Quando tenta cadastrar, Então deve visualizar aviso de campo obrigatório", () => {
    registerPage.fillName("QA Test");
    registerPage.fillEmail(genEmail());
    registerPage.fillPassword("123456");
    registerPage.submit();
    registerPage.validateRequiredField();
  });

  it("Dado que senha e confirmação são diferentes, Quando tenta cadastrar, Então deve exibir aviso de erro", () => {
    registerPage.fillName("QA Test");
    registerPage.fillEmail(genEmail());
    registerPage.fillPassword("123456");
    registerPage.fillConfirmPassword("654321");
    registerPage.submit();
    registerPage.validatePassowrdFailed();
  });

  it("Dado que todos os campos são preenchidos corretamente, Quando cadastra, Então deve exibir número da conta criada", () => {
    registerPage.fillName("QA Test");
    registerPage.fillEmail(genEmail());
    registerPage.fillPassword("123456");
    registerPage.fillConfirmPassword("123456");
    registerPage.toggleAddBalance(true);
    registerPage.submit();
    registerPage.captureAccountNumber();
  });
});
