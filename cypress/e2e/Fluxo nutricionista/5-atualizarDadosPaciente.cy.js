/// <reference types="cypress" />

import { dadosLogin } from "../../support/dadosLogin";
import EditarPaciente from "../../support/pages/DashboardNutricionista/EditarPaciente";

describe('Dashboard do Nutricionista - Atualizar dados cadastrais dos pacientes', () => {
    const login = dadosLogin();
    
    beforeEach(() => {
        cy.loginProfissional(login.emailNutricionista, login.senhaNutricionista);
    });

    /* TESTES POSITIVOS */
    it('Atualiza dados cadastrais de um paciente aleatório', () => {
        EditarPaciente.selecionaEditarPacienteAleatorio();
        EditarPaciente.editaCampoNome();
        EditarPaciente.editaCampoSobrenome();
        EditarPaciente.editaCampoObservacoes();
        EditarPaciente.selecionaBtnAtualizar();
        cy.contains('Paciente atualizado com sucesso').should('be.visible');
    });

    it('Cancela a atualização dos dados', () => {
        EditarPaciente.selecionaEditarPacienteAleatorio();
        EditarPaciente.editaCampoNome();
        EditarPaciente.editaCampoSobrenome();
        EditarPaciente.editaCampoObservacoes();
        EditarPaciente.selecionaBtnCancelar();
        cy.contains('Paciente atualizado com sucesso').should('not.exist');
    });

    /* TESTES NEGATIVOS */
    it('Validar tratamento de erro para email inválido', () => {
        EditarPaciente.selecionaEditarPacienteAleatorio();
        EditarPaciente.editarCampoEmailInvalido();
        EditarPaciente.selecionaBtnAtualizar();
        cy.contains('Email inválido').should('be.visible');
    });

    it('Validar tratamento de erro para email já cadastrado', () => {
        EditarPaciente.selecionaEditarPacienteAleatorio();
        EditarPaciente.editarCampoEmailCadastrado();
        EditarPaciente.selecionaBtnAtualizar();
        cy.contains('Email já registrado').should('be.visible');
    });

    it('Validar tratamento de erro para campos em branco', () => {
        EditarPaciente.selecionaEditarPacienteAleatorio();
        EditarPaciente.editarCampoTelefoneVazio();
        EditarPaciente.editarCampoCpfVazio();
        EditarPaciente.selecionaBtnAtualizar();
        cy.contains('Telefone deve ter 11 dígitos').should('be.visible');
        cy.contains('CPF deve ter 11 dígitos').should('be.visible');
    });
});