/// <reference types="cypress" />

import CadastroPage from '../../support/pages/CadastroPage';
import { gerarDadosPersonalTrainer } from '../../support/geradorDadosFaker';

describe('Cadastro do Personal', () => {

    beforeEach(() => {
        CadastroPage.visitCadastro();
    });

    it('Deve realizar o cadastro com sucesso', () => {
        const personal = gerarDadosPersonalTrainer();

        CadastroPage.selecionaPersonalTrainer();
        CadastroPage.preencheNome(personal.nome);
        CadastroPage.preencheCREF(personal.cref);
        CadastroPage.preencheEmail(personal.email);
        CadastroPage.preencheCPF(personal.cpf);
        CadastroPage.preencheTelefone(personal.telefone);
        CadastroPage.preencheSenha(personal.senha);
        CadastroPage.preencheConfirmarSenha(personal.senha);

        CadastroPage.btnCadastrar();

        // Validando
        cy.contains('Cadastro realizado com sucesso', {timeout: 10000}).should('be.visible');

    });
});