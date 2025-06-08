/// <reference types="cypress" />

import { dadosLogin } from "../../support/dadosLogin";

describe('Tela de Login Paciente', () => {

  const login = dadosLogin();
  
  /* TESTE POSITIVO */
  it('Login com credenciais válidas', () => {
    
    // Usando comando personalizado de login
    cy.loginPaciente(login.emailPacienteComPlano, login.senhaPacienteComPlano);

    // Validando o redirecionamento
    cy.url().should('include', '/dashboard/patient');
    cy.contains(login.emailPacienteComPlano).should('be.visible');
    cy.contains('Idade:').should('be.visible');
  });
  

  /* TESTES NEGATIVOS */
  it('Tentativa de login com email não cadastrado', () => {
    cy.loginPaciente(login.emailIncorreto, login.senhaPacienteComPlano)
    cy.contains('Credenciais inválidas', {timeout: 10000}).should('be.visible');
  });

  it('Tentativa de login com senha incorreta', () => {
    cy.loginPaciente(login.emailPacienteComPlano, login.senhaIncorreta)
    cy.contains('Credenciais inválidas', {timeout: 10000}).should('be.visible');
  });
});
