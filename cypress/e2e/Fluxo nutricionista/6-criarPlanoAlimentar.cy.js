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
    it('Validar tratamento de erro para plano com campos obrigatórios em branco', () => {
        CriarPlano.selecionarBtnCriarPlano();
        cy.contains('h1', 'Criar plano alimentar').should('be.visible');
        CriarPlano.selecionaBtnAddRefeicao();
        CriarPlano.preencheRefeicao();
        CriarPlano.selecionaBtnAddAlimento();
        // Não seleciona alimento
        CriarPlano.selecionaBtnSalvarPlano();
        
        cy.contains('Nome do plano é obrigatório').should('be.visible');
        cy.contains('Data de início é obrigatória').should('be.visible');
        //cy.contains('Data de término é obrigatória').should('be.visible');
        cy.contains('Selecionar um alimento é obrigatório').should('be.visible');
        cy.contains('Porção é obrigatória').should('be.visible');
    });

    it('Validar tratamento de erro para plano alimentar sem refeições', () => {
        CriarPlano.selecionarBtnCriarPlano();
        cy.contains('h1', 'Criar plano alimentar').should('be.visible');
        CriarPlano.preencheDetalhesPlano();
        // Não adiciona refeições
        CriarPlano.selecionaBtnSalvarPlano();
        cy.contains('Inclua pelo menos 1 refeição').should('be.visible');
    });

    it('Validar tratamento de erro para refeição sem alimentos', () => {
        CriarPlano.selecionarBtnCriarPlano();
        cy.contains('h1', 'Criar plano alimentar').should('be.visible');
        CriarPlano.preencheDetalhesPlano();
        CriarPlano.selecionaBtnAddRefeicao();
        CriarPlano.preencheRefeicao();
        // Não adiciona alimentos
        CriarPlano.selecionaBtnSalvarPlano();
        cy.contains('Nenhum alimento adicionado ainda. Clique em "Adicionar alimento" para começar').should('be.visible');
    });
})