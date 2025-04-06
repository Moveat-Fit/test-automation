/// <reference types="cypress" />

import CadastroPage from "../../support/pages/CadastroPage";

describe('Validando tratamento de senha', () => {
    
    beforeEach('Acesso à pagina de cadastro', () => {
        CadastroPage.visitCadastro();
    });


    it('Deve exibir erro quando a senha tiver menos de 8 caracteres', () => {
        CadastroPage.preencheSenha('Abc!');
        CadastroPage.preencheConfirmarSenha('Abc!');

        // Validações
        cy.get('svg.text-red-500').should('be.visible'); // Valida que a cor vermelha está presente
        cy.contains('Senha precisa ter no mínimo 8 dígitos').should('be.visible'); // Valida o texto
        cy.contains('button', 'Criar').should('be.disabled'); // Valida que o botão "Criar" está indisponível
    });

    it('Deve exibir erro quando a senha não tiver caracteres especiais', () => {
        CadastroPage.preencheSenha('Senhasimples123'); 
        CadastroPage.preencheConfirmarSenha('Senhasimples123');

        cy.get('svg.text-red-500').should('be.visible');
        cy.contains('Senha precisa ter caracteres especiais').should('be.visible'); 
        cy.contains('button', 'Criar').should('be.disabled');
    });

    it('Deve exibir erro quando a senha não tiver letras maiúsuclas', () => {
        CadastroPage.preencheSenha('senha1234567!'); 
        CadastroPage.preencheConfirmarSenha('senha1234567!');

        cy.get('svg.text-red-500').should('be.visible');
        cy.contains('Senha precisa ter letras maiúsculas e minúsculas').should('be.visible'); 
        cy.contains('button', 'Criar').should('be.disabled');
    });

    it('Deve exibir erro quando as senhas não coincidirem', () => {
        CadastroPage.preencheSenha('Senha12345678!'); 
        CadastroPage.preencheConfirmarSenha('SenhaErrada123!');

        cy.get('svg.text-red-500').should('be.visible');
        cy.contains('As senhas precisam coincidir').should('be.visible');
        cy.contains('button', 'Criar').should('be.disabled');
    });
});
