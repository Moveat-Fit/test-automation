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
        LeituraPaciente.selecionaVerPacientes();

        LeituraPaciente.selecionaCampoPesquisa();
        LeituraPaciente.preencheCampoPesquisa('Salamaleico');
        cy.contains('Salamaleico Da Silva').should('be.visible');
    });

    it('Pesquisa pelo nome parcialmente', () => {
        LeituraPaciente.selecionaVerPacientes();

        LeituraPaciente.selecionaCampoPesquisa();
        LeituraPaciente.preencheCampoPesquisa('Ca');
        cy.contains('Ca').should('be.visible');
    });

    /* TESTE NEGATIVO */
    it.only('Tentativa de pesquisa por nome inexistente', () => {
        LeituraPaciente.selecionaVerPacientes();

        LeituraPaciente.selecionaCampoPesquisa();
        LeituraPaciente.preencheCampoPesquisa('Sabrina Anchieta');
        cy.contains('Nenhum paciente encontrado').should('be.visible');
    });
});