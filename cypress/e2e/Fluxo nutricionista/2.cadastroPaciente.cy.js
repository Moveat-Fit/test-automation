/// <reference types="cypress" />

import { dadosLogin } from "../../support/dadosLogin";
import DashboardNutriPage from "../../support/pages/DashboardNutriPage";
import { gerarDadosPaciente } from '../../support/geradorDadosFaker';

describe('Dashboard do Nutricionista', () => {
    const login = dadosLogin();
    const paciente = gerarDadosPaciente();

    beforeEach(() => {
        cy.loginProfissional(login.emailNutricionista, login.senhaNutricionista);
    });

    it('Cadastro com dados válidos', () => {
        DashboardNutriPage.selecionaCadastroPaciente();

        DashboardNutriPage.preencheNomePaciente(paciente.nome);
        DashboardNutriPage.preencheSobrenomePaciente(paciente.sobrenome);
        DashboardNutriPage.preencheEmailPaciente(paciente.email);
        DashboardNutriPage.preencheSenhaPaciente(paciente.senha);
        DashboardNutriPage.preencheTelefonePaciente(paciente.telefone);
        DashboardNutriPage.preenchePesoPaciente(paciente.peso);
        DashboardNutriPage.preencheAlturaPaciente(paciente.altura);
        DashboardNutriPage.preencheCpfPaciente(paciente.cpf);
        DashboardNutriPage.preencheObservacoesPaciente(paciente.observacoes);
        DashboardNutriPage.selecionaDataAleatoria();
        DashboardNutriPage.selecionaSexoPaciente();
    });
});
