/// <reference types="cypress" />

import { dadosLogin } from "../../support/dadosLogin";

describe('Tela de Login', () => {

  const login = dadosLogin();
  
  /* TESTE POSITIVO */
  it('Login com credenciais válidas', () => {
    
    // Usando comando personalizado de login
    cy.loginNutricionista(login.emailCorreto, login.senhaCorreta);

    // Validando o redirecionamento
    cy.url().should('include', '/dashboard');
    cy.contains('Dashboard').should('be.visible');
    cy.contains('Gerencie seus pacientes e registros de forma eficiente').should('be.visible');
  });
  

  /* TESTES NEGATIVOS */
  it('Tentativa de login com email não cadastrado', () => {
    cy.loginNutricionista(login.emailIncorreto, login.senhaCorreta)
    cy.contains('Credenciais inválidas', {timeout: 10000}).should('be.visible');
  });

  it('Tentativa de login com senha incorreta', () => {
    cy.loginNutricionista(login.emailCorreto, login.senhaIncorreta)
    cy.contains('Credenciais inválidas', {timeout: 10000}).should('be.visible');
  });
});