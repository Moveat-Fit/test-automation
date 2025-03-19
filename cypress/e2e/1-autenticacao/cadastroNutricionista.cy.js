/// <reference types="cypress" />

import CadastroPage from '../../support/pages/CadastroPage';
import { gerarDadosNutricionista } from '../../support/geradorDadosFaker';

describe('Cadastro do Nutricionista', () => {

    beforeEach(() => {
        CadastroPage.visitCadastro();
    });

    it('Deve realizar o cadastro com sucesso', () => {
        const nutricionista = gerarDadosNutricionista();

        CadastroPage.selecionaNutricionista();
        CadastroPage.preencheNome(nutricionista.nome);
        CadastroPage.preencheCRN(nutricionista.crn);
        CadastroPage.preencheEmail(nutricionista.email);
        CadastroPage.preencheCPF(nutricionista.cpf);
        CadastroPage.preencheTelefone(nutricionista.telefone);
        CadastroPage.preencheSenha(nutricionista.senha);
        CadastroPage.preencheConfirmarSenha(nutricionista.senha);

        CadastroPage.btnCadastrar();
        
        // Validando
        cy.contains('Cadastro realizado com sucesso', {timeout: 10000}).should('be.visible');
    });
});