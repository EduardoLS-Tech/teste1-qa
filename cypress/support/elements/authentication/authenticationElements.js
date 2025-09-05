const authenticationElements = {
  //Login
  emailInputLogin: ':nth-child(1) > [name="email"]',
  passwordInputLogin: '.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > [name="password"]',
  acessButton: '.otUnI',
  registerButton: '.ihdmxA',
  requiredField: '.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__warging',
  invalidField: '.styles__ContainerInformations-sc-8zteav-3',

  // Register
  emailInput: ':nth-child(2) > [name="email"]',
  nameInput:'[name="name"]',
  passwordInput: ':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > [name="password"]',
  confirmPasswordInput: '[name="passwordConfirmation"]',
  toggleAddBalance:'#toggleAddBalance',
  submitRegisterButton:'.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0',
  closeModal:'#btnCloseModal'
}

export default authenticationElements;
