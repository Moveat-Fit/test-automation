/* Ações específicas da página Dashboard do nutricionista */
import { faker } from '@faker-js/faker';

class DashboardNutriPage {
    selecionaCadastroPaciente() {
        cy.contains('button', 'Cadastrar novo paciente').click();
    }

    // Preencher formulário de cadastro de paciente
    preencheNomePaciente(nome) {
        cy.get('input[name="firstName"]').type(nome);
    }
    preencheSobrenomePaciente(sobrenome) {
        cy.get('input[name="lastName"]').type(sobrenome);
    }
    preencheEmailPaciente(email) {
        cy.get('input[name="email"]').type(email);
    }
    preencheSenhaPaciente(senha) {
        cy.get('input[name="password"]').type(senha);
    }
    preencheTelefonePaciente(numero) {
        cy.get('#«r8»-form-item').type(numero);
    }
    preenchePesoPaciente(peso) {
        cy.get('#«rj»-form-item').type(peso);
    }
    preencheAlturaPaciente(altura) {
        cy.get('#«rk»-form-item').type(altura);
    }
    preencheCpfPaciente(cpf) {
        cy.get('#«r9»-form-item').type(cpf);
    }
    preencheObservacoesPaciente(observacoes) {
        cy.get('#«rl»-form-item').type(observacoes);
    }

    // Data de nascimento aleatória	(Calendário)	
    selecionaDataAleatoria() {
        // Clique no botão para abrir o calendário
        cy.get('button[data-slot="popover-trigger"]').click();
    
        // Gera mês e ano aleatórios
        const mesAleatorio = faker.number.int({ min: 0, max: 11 }); 
        const anoAleatorio = faker.number.int({ min: 2000, max: 2023 });
        const diaAleatorio = faker.number.int({ min: 1, max: 28 });
    
        cy.get('select[name="months"]').select(`${mesAleatorio}`);
        cy.get('select[name="years"]').select(`${anoAleatorio}`);
        cy.get('button[name="day"]').contains(diaAleatorio).click();
    
        cy.get('button[data-slot="popover-trigger"]').click();
    }

    // Seleciona sexo aleatório (radio buttons)
    selecionaSexoPaciente() {
        const opcoesSexo = ['M', 'F', 'O'];
    
        // Seleciona um valor aleatório
        const sexoAleatorio = opcoesSexo[Math.floor(Math.random() * opcoesSexo.length)];
    
        // Seleciona o radio button correspondente
        cy.get(`button[value="${sexoAleatorio}"]`).click();
    }
}

export default new DashboardNutriPage();
