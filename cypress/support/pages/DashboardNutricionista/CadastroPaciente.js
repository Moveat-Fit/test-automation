/* Ações específicas da página Dashboard do nutricionista */
import { faker } from '@faker-js/faker';

class CadastroPaciente {
    selecionaCadastroPaciente() {
        cy.contains('a.bg-primary-custom', 'Cadastrar novo paciente').click();
    }

    // Preencher formulário de cadastro de paciente
    preencheNomePaciente(nome) {
        cy.get('input[name="firstName"]').type(nome);
    }
    preencheSobrenomePaciente(sobrenome) {
        cy.get('input[name="lastName"]').type(sobrenome);
    }
    preencheEmailPaciente(email) {
        cy.get('[data-testid="input-email"]').type(email);
    }
    preencheSenhaPaciente(senha) {
        cy.get('input[name="password"]').type(senha);
    }
    preencheTelefonePaciente(numero) {
        cy.get('[data-testid="input-phone"]').type(numero);
    }
    preenchePesoPaciente(peso) {
        cy.get('[data-testid="input-weight"]').type(peso);
    }
    preencheAlturaPaciente(altura) {
        cy.get('[data-testid="input-height"]').type(altura);
    }
    preencheCpfPaciente(cpf) {
        cy.get('[data-testid="input-cpf"]').type(cpf);
    }
    preencheObservacoesPaciente(observacoes) {
        cy.get('[data-testid="input-observations"]').type(observacoes);
    }

    // Data de nascimento aleatória	(Calendário)	
    selecionaDataAleatoria() {
        // Clique no botão para abrir o calendário
        cy.get('[data-testid="input-dateOfBirth"]').click();
    
        // Gera mês e ano aleatórios
        const mesAleatorio = faker.number.int({ min: 0, max: 11 }); 
        const anoAleatorio = faker.number.int({ min: 2000, max: 2023 });
        const diaAleatorio = faker.number.int({ min: 1, max: 28 });
    
        cy.get('select[name="months"]').select(`${mesAleatorio}`);
        cy.get('select[name="years"]').select(`${anoAleatorio}`);
        cy.get('button[name="day"]').contains(diaAleatorio).click();
    
        cy.get('[data-testid="input-dateOfBirth"]').click();
    }

    // Seleciona sexo aleatório (dropdown)
    selecionaSexoPaciente() {
        const opcoesSexo = ['Masculino', 'Feminino', 'Outro'];
        const sexoAleatorio = opcoesSexo[Math.floor(Math.random() * opcoesSexo.length)];
        
        cy.get('button[role="combobox"]').click();
        cy.get('div[role="option"]').contains(sexoAleatorio).click();
    }

    btnCadastrar() {
        cy.contains('button', 'Cadastrar').click();
    }
}

export default new CadastroPaciente();
