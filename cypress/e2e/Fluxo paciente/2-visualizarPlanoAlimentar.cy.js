/// <reference types="cypress" />

import { dadosLogin } from "../../support/dadosLogin";
import VisualizarPlano from "../../support/pages/DashboardPaciente/visualizarPlano";

describe('Dashboard do Paciente - Visualizar plano alimentar', () => {
    const login = dadosLogin();

    it('Visualizar plano alimentar', () => {
        cy.loginPaciente(login.emailPacienteComPlano, login.senhaPacienteComPlano);
        cy.contains('Plano alimentar de hoje').should('be.visible');
        cy.contains('Refeições de hoje').should('be.visible');

        VisualizarPlano.visualizarAlimentosRefeicao();
        cy.contains('Café da Manhã').should('be.visible');
        cy.contains('Almoço').should('be.visible');
        cy.contains('Alimentos').should('be.visible');
    });

    it('Validar tratamento de erro ao tentar acessar sem um plano cadastrado', () => {
        cy.loginPaciente(login.emailPacienteSemPlano, login.senhaPacienteSemPlano);
        cy.contains('Dashboard').should('be.visible');

        cy.contains('Seu plano alimentar ainda não está disponível').should('be.visible');
        cy.contains('Entre em contato com o seu nutricionista para obter mais informações').should('be.visible');

    });
});