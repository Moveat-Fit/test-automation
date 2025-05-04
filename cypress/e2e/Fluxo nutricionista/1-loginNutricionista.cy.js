/// <reference types="cypress" />

import { dadosLogin } from "../../support/dadosLogin";

describe('Tela de Login', () => {

  const login = dadosLogin();
  
  /* TESTE POSITIVO */
  it('Login com credenciais válidas', () => {
    
    // Usando comando personalizado de login
    cy.loginProfissional(login.emailNutricionista, login.senhaNutricionista);

    // Validando o redirecionamento
    cy.url().should('include', '/dashboard');
    cy.contains('Dashboard').should('be.visible');
    cy.contains('Gerencie e veja as informações de seus pacientes').should('be.visible');
  });
  

  /* TESTES NEGATIVOS */
  it('Tentativa de login com email não cadastrado', () => {
    cy.loginProfissional(login.emailIncorreto, login.senhaNutricionista)
    cy.contains('Credenciais inválidas', {timeout: 10000}).should('be.visible');
  });

  it('Tentativa de login com senha incorreta', () => {
    cy.loginProfissional(login.emailNutricionista, login.senhaIncorreta)
    cy.contains('Credenciais inválidas', {timeout: 10000}).should('be.visible');
  });
});
