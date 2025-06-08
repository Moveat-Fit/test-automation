/// <reference types="cypress" />

import { dadosLogin } from "../../support/dadosLogin";
import EditarPlano from "../../support/pages/PlanoAlimentar/EditarPlano";

describe('Dashboard do Nutricionista - Editar plano alimentar de um paciente', () => {
    const login = dadosLogin();

    beforeEach(() => {
        cy.loginProfissional(login.emailNutricionista, login.senhaNutricionista);
    });

    /* TESTES POSITIVOS */
    it('Editar plano alimentar', () => {
        EditarPlano.editarPlanoComTentativas();
        cy.contains('Plano alimentar atualizado com sucesso').should('exist');
    });

    /* TESTES NEGATIVOS */
    it('Validar erro ao tentar salvar edição com campos obrigatórios em branco', () => {
        EditarPlano.salvarComCamposObrigatoriosEmBranco();
        cy.contains('Nome do plano é obrigatório').should('be.visible');
    });

    it('Validar erro ao tentar salvar edição sem refeições', () => {
        EditarPlano.salvarSemRefeicoes();
        cy.contains('Inclua pelo menos 1 refeição').should('be.visible');
    });

    it('Validar erro ao tentar salvar edição sem alimentos', () => {
        EditarPlano.salvarSemAlimentos();
        cy.contains('Nenhum alimento adicionado ainda. Clique em "Adicionar alimento" para começar').should('be.visible');
    });

});