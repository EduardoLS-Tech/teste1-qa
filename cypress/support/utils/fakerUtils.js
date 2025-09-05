import { faker } from '@faker-js/faker'

export function generateRandomUser() {
  const name = faker.person.fullName()  // Nome aleatório
  const email = faker.internet.email()  // E-mail aleatório
  const password = faker.internet.password(8) // Senha aleatória com 8 caracteres

  return { name, email, password, confirmPassword: password }
}