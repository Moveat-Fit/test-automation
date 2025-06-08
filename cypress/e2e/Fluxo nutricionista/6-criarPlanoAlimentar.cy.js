/// <reference types="cypress" />

import { dadosLogin } from "../../support/dadosLogin";
import CriarPlano from "../../support/pages/PlanoAlimentar/CriarPlano";

describe('Dashboard do Nutricionista - Atualizar dados cadastrais dos pacientes', () => {
    const login = dadosLogin();
    
    beforeEach(() => {
        cy.loginProfissional(login.emailNutricionista, login.senhaNutricionista);
    });

    /* TESTES POSITIVOS */
    it('Cria um plano alimentar', () => {
        CriarPlano.selecionarBtnCriarPlano();
        cy.contains('h1', 'Criar plano alimentar').should('be.visible');
        CriarPlano.preencheDetalhesPlano();
        CriarPlano.selecionaBtnAddRefeicao();
        CriarPlano.preencheRefeicao();
        CriarPlano.selecionaBtnAddAlimento();
        CriarPlano.preencheAlimento();
        CriarPlano.selecionaBtnSalvarPlano();
        cy.contains('Plano alimentar criado com sucesso').should('be.visible');
    });

    /* TESTES NEGATIVOS */

})