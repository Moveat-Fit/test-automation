/// <reference types="cypress" />

import { dadosLogin } from "../../support/dadosLogin";

import LeituraPaciente from "../../support/pages/DashboardNutricionista/LeituraPaciente";

describe('Dashboard do Nutricionista - Leitura de pacientes', () => {
    const login = dadosLogin();

    beforeEach(() => {
        cy.loginProfissional(login.emailNutricionista, login.senhaNutricionista);
    });

    /* TESTES POSITIVOS */
    it('Pesquisa pelo nome completo', () => {
        LeituraPaciente.selecionaCampoPesquisa();
        LeituraPaciente.preencheCampoPesquisa('Novo Nome Novo Sobrenome');
        cy.contains('Novo Nome Novo Sobrenome').should('be.visible');
    });

    it('Pesquisa pelo nome parcialmente', () => {
        LeituraPaciente.selecionaCampoPesquisa();
        LeituraPaciente.preencheCampoPesquisa('Ca');
        cy.contains('Ca').should('be.visible');
    });

    /* TESTE NEGATIVO */
    it('Tentativa de pesquisa por nome inexistente', () => {
        LeituraPaciente.selecionaCampoPesquisa();
        LeituraPaciente.preencheCampoPesquisa('Sabrina Anchieta');
        cy.contains('Nenhum paciente encontrado').should('be.visible');
    });
});