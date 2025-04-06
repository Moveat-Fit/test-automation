/// <reference types="cypress" />

import CadastroPage from '../../support/pages/CadastroPage';
import { gerarDadosNutricionista } from '../../support/geradorDadosFaker';


describe('Cadastro do nutricionista', () => {
    
    const nutricionista = gerarDadosNutricionista();

    beforeEach(() => {
        CadastroPage.visitCadastro();
        CadastroPage.selecionaNutricionista(); // Checkbox nutricionista
    });

    const preencherFormulario = (dados) => {
        CadastroPage.preencheNome(dados.nome);
        CadastroPage.preencheCRN(dados.crn);
        CadastroPage.preencheEmail(dados.email);
        CadastroPage.preencheCPF(dados.cpf);
        CadastroPage.preencheTelefone(dados.telefone);
        CadastroPage.preencheSenha(dados.senha);
        CadastroPage.preencheConfirmarSenha(dados.senha);
    };

    it('Cadastro com dados válidos', () => {
        preencherFormulario(nutricionista);
        CadastroPage.btnCadastrar();

        // Validando
        cy.contains('Cadastro realizado com sucesso', {timeout: 10000}).should('be.visible');

    });

    it('Tentativa de cadastro com email existente', () => {
        preencherFormulario({...nutricionista, email:'admin@moveat'}); // Sobrescrevendo o email
        CadastroPage.btnCadastrar();

        // Validando
        cy.contains('E-mail já está cadastrado', {timeout: 10000}).should('be.visible');
    });

    it('Tentativa de cadastro com dados em branco', () => {
        preencherFormulario({...nutricionista, cpf:' '}); // Sobrescrevendo o nome
        CadastroPage.btnCadastrar();

        // Validando
        cy.get('#cpf').invoke('prop', 'validationMessage').should('eq', 'Preencha este campo.');
    });
});