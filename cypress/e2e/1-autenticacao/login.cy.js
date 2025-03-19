/// <reference types="cypress" />

import { dadosLogin } from "../../support/dadosLogin";

describe('Tela de Login', () => {

  const login = dadosLogin();
  
  /* TESTE POSITIVO */
  it('Login com credenciais válidas', () => {
    
    // Usando comando personalizado de login
    cy.login(login.emailCorreto, login.senhaCorreta);

    // Validando o redirecionamento
    cy.url().should('include', '/dashboard');
    cy.contains('Logou').should('be.visible');
  });
  

  /* TESTES NEGATIVOS */
  it('Tentativa de login com email não cadastrado', () => {
    cy.login(login.emailIncorreto, login.senhaCorreta)
    cy.contains('E-mail e/ou senha inválidos', {timeout: 10000}).should('be.visible');
  });

  it('Tentativa de login com senha incorreta', () => {
    cy.login(login.emailCorreto, login.senhaIncorreta)
    cy.contains('E-mail e/ou senha inválidos', {timeout: 10000}).should('be.visible');
  });
});