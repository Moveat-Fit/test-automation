/// <reference types="cypress" />

import { dadosLogin } from "../../support/dadosLogin";
import RemoverPaciente from "../../support/pages/DashboardNutricionista/RemoverPaciente";

describe('Dashboard do Nutricionista - Remover pacientes', () => {
    const login = dadosLogin();
    
    beforeEach(() => {
        cy.loginProfissional(login.emailNutricionista, login.senhaNutricionista);
    });

    /* TESTES POSITIVOS */
    it('Remove um paciente aleatório', () => {
        RemoverPaciente.selecionaRemoverPaciente();
        cy.contains('Você tem certeza que deseja excluir?').should('be.visible');
        RemoverPaciente.selecionarBtnConfirmar();
        cy.contains('Paciente removido com sucesso!').should('be.visible');
    });

    /* TESTE NEGATIVO */
    it('Cancela a exclusão de um paciente', () => {
        RemoverPaciente.selecionaRemoverPaciente();
        cy.contains('Você tem certeza que deseja excluir?').should('be.visible');
        RemoverPaciente.selecionarBtnCancelar();
        cy.contains('Paciente removido com sucesso!').should('not.exist');
    });
});