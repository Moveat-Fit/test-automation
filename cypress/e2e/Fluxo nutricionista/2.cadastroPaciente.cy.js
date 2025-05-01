/// <reference types="cypress" />

import { dadosLogin } from "../../support/dadosLogin";
import { gerarDadosPaciente } from '../../support/geradorDadosFaker';
import CadastroPaciente from "../../support/pages/DashboardNutriPage";

describe('Dashboard do Nutricionista', () => {
    const login = dadosLogin();
    const paciente = gerarDadosPaciente();

    beforeEach(() => {
        cy.loginProfissional(login.emailNutricionista, login.senhaNutricionista);
    });

    /* TESTE POSITIVO */
    it('Cadastro com dados válidos', () => {
        CadastroPaciente.selecionaCadastroPaciente();

        CadastroPaciente.preencheNomePaciente(paciente.nome);
        CadastroPaciente.preencheSobrenomePaciente(paciente.sobrenome);
        CadastroPaciente.preencheEmailPaciente(paciente.email);
        CadastroPaciente.preencheSenhaPaciente(paciente.senha);
        CadastroPaciente.preencheTelefonePaciente(paciente.telefone);
        CadastroPaciente.preenchePesoPaciente(paciente.peso);
        CadastroPaciente.preencheAlturaPaciente(paciente.altura);
        CadastroPaciente.preencheCpfPaciente(paciente.cpf);
        CadastroPaciente.preencheObservacoesPaciente(paciente.observacoes);
        CadastroPaciente.selecionaDataAleatoria();
        CadastroPaciente.selecionaSexoPaciente();
        CadastroPaciente.btnCadastrar();

        cy.contains('Paciente cadastrado com sucesso!', {timeout: 10000}).should('be.visible');
        cy.contains('Pacientes').should('be.visible');
    });

    /* TESTES NEGATIVOS */
    it('Tentativa de cadastro com CPF inválido', () => {
        CadastroPaciente.selecionaCadastroPaciente();

        CadastroPaciente.preencheNomePaciente(paciente.nome);
        CadastroPaciente.preencheSobrenomePaciente(paciente.sobrenome);
        CadastroPaciente.preencheEmailPaciente(paciente.email);
        CadastroPaciente.preencheSenhaPaciente(paciente.senha);
        CadastroPaciente.preencheTelefonePaciente(paciente.telefone);
        CadastroPaciente.preenchePesoPaciente(paciente.peso);
        CadastroPaciente.preencheAlturaPaciente(paciente.altura);
        CadastroPaciente.preencheCpfPaciente('123456789'); // CPF inválido
        CadastroPaciente.preencheObservacoesPaciente(paciente.observacoes);
        CadastroPaciente.selecionaDataAleatoria();
        CadastroPaciente.selecionaSexoPaciente();
        CadastroPaciente.btnCadastrar();

        cy.contains('CPF deve ter 11 dígitos', {timeout: 10000}).should('be.visible');
        cy.contains('Gerencie e veja as informações de seus pacientes').should('not.exist');
    });

    it('Tentativa de cadastro com email inválido', () => {
        CadastroPaciente.selecionaCadastroPaciente();

        CadastroPaciente.preencheNomePaciente(paciente.nome);
        CadastroPaciente.preencheSobrenomePaciente(paciente.sobrenome);
        // Email inválido (não foi preenchido)
        CadastroPaciente.preencheSenhaPaciente(paciente.senha);
        CadastroPaciente.preencheTelefonePaciente(paciente.telefone);
        CadastroPaciente.preenchePesoPaciente(paciente.peso);
        CadastroPaciente.preencheAlturaPaciente(paciente.altura);
        CadastroPaciente.preencheCpfPaciente(paciente.cpf);
        CadastroPaciente.preencheObservacoesPaciente(paciente.observacoes);
        CadastroPaciente.selecionaDataAleatoria();
        CadastroPaciente.selecionaSexoPaciente();
        CadastroPaciente.btnCadastrar();

        cy.contains('Email inválido', {timeout: 10000}).should('be.visible');
        cy.contains('Gerencie e veja as informações de seus pacientes').should('not.exist');
    });

    it('Tentativa de cadastro com CPF já cadastrado', () => {
        CadastroPaciente.selecionaCadastroPaciente();

        CadastroPaciente.preencheNomePaciente(paciente.nome);
        CadastroPaciente.preencheSobrenomePaciente(paciente.sobrenome);
        CadastroPaciente.preencheEmailPaciente(paciente.email);
        CadastroPaciente.preencheSenhaPaciente(paciente.senha);
        CadastroPaciente.preencheTelefonePaciente(paciente.telefone);
        CadastroPaciente.preenchePesoPaciente(paciente.peso);
        CadastroPaciente.preencheAlturaPaciente(paciente.altura);
        CadastroPaciente.preencheCpfPaciente('50262232812'); // CPF já cadastrado
        CadastroPaciente.preencheObservacoesPaciente(paciente.observacoes);
        CadastroPaciente.selecionaDataAleatoria();
        CadastroPaciente.selecionaSexoPaciente();
        CadastroPaciente.btnCadastrar();

        cy.contains('Email, CPF ou número de telefone já registrado', {timeout: 10000}).should('be.visible');
        cy.contains('Gerencie e veja as informações de seus pacientes').should('not.exist');
    });

    it('Tentativa de cadastro com email já cadastrado', () => {
        CadastroPaciente.selecionaCadastroPaciente();

        CadastroPaciente.preencheNomePaciente(paciente.nome);
        CadastroPaciente.preencheSobrenomePaciente(paciente.sobrenome);
        CadastroPaciente.preencheEmailPaciente('carol@email.com'); // Email já cadastrado
        CadastroPaciente.preencheSenhaPaciente(paciente.senha);
        CadastroPaciente.preencheTelefonePaciente(paciente.telefone);
        CadastroPaciente.preenchePesoPaciente(paciente.peso);
        CadastroPaciente.preencheAlturaPaciente(paciente.altura);
        CadastroPaciente.preencheCpfPaciente(paciente.cpf);
        CadastroPaciente.preencheObservacoesPaciente(paciente.observacoes);
        CadastroPaciente.selecionaDataAleatoria();
        CadastroPaciente.selecionaSexoPaciente();
        CadastroPaciente.btnCadastrar();

        cy.contains('Email, CPF ou número de telefone já registrado', {timeout: 10000}).should('be.visible');
        cy.contains('Gerencie e veja as informações de seus pacientes').should('not.exist');
    });

    it('Tentativa de cadastro com campos não preenchidos', () => {
        CadastroPaciente.selecionaCadastroPaciente();

        CadastroPaciente.preencheNomePaciente(paciente.nome);
        CadastroPaciente.preencheSobrenomePaciente(paciente.sobrenome);
        CadastroPaciente.btnCadastrar();

        cy.contains('Email inválido', {timeout: 10000}).should('be.visible');
        cy.contains('Data de nascimento é obrigatória', {timeout: 10000}).should('be.visible');
        cy.contains('Senha deve ter pelo menos 8 caracteres', {timeout: 10000}).should('be.visible');
        cy.contains('Telefone deve ter 11 dígitos', {timeout: 10000}).should('be.visible');
        cy.contains('Peso inválido', {timeout: 10000}).should('be.visible');
        cy.contains('Altura inválida', {timeout: 10000}).should('be.visible');
        cy.contains('CPF deve ter 11 dígitos', {timeout: 10000}).should('be.visible');
        cy.contains('Gênero é obrigatório', {timeout: 10000}).should('be.visible');

        cy.contains('Gerencie e veja as informações de seus pacientes').should('not.exist');
    });
    
});
