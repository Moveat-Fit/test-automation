/// <reference types="cypress" />

import CadastroPage from '../../support/pages/CadastroPage';
import { gerarDadosPersonalTrainer } from '../../support/geradorDadosFaker';


describe('Cadastro do Personal', () => {
    
    const personal = gerarDadosPersonalTrainer();

    beforeEach(() => {
        CadastroPage.visitCadastro();
        CadastroPage.selecionaPersonalTrainer();
    });

    const preencherFormulario = (dados) => {
        CadastroPage.preencheNome(dados.nome);
        CadastroPage.preencheCREF(dados.cref);
        CadastroPage.preencheEmail(dados.email);
        CadastroPage.preencheCPF(dados.cpf);
        CadastroPage.preencheTelefone(dados.telefone);
        CadastroPage.preencheSenha(dados.senha);
        CadastroPage.preencheConfirmarSenha(dados.senha);
    };

    it('Cadastro com dados válidos', () => {
        preencherFormulario(personal);
        CadastroPage.btnCadastrar();

        // Validando
        cy.contains('Cadastro realizado com sucesso', {timeout: 10000}).should('be.visible');

    });

    it('Tentativa de cadastro com email existente', () => {
        preencherFormulario({...personal, email:'admin@moveat'}); // Sobrescrevendo o email
        CadastroPage.btnCadastrar();

        // Validando
        cy.contains('E-mail já está cadastrado', {timeout: 10000}).should('be.visible');
    });

    it('Tentativa de cadastro com dados em branco', () => {
        preencherFormulario({...personal, cpf:' '}); // Sobrescrevendo o nome
        CadastroPage.btnCadastrar();

        // Validando
        cy.get('#cpf').invoke('prop', 'validationMessage').should('eq', 'Preencha este campo.');
    });
});