import { faker } from '@faker-js/faker';

class CriarPlano {

    selecionarBtnCriarPlano() {
        cy.get('[data-testid="button-optionsMealPlan"]').then($btns => {
            const randomIndex = Math.floor(Math.random() * $btns.length);
            cy.wrap($btns[randomIndex]).click();
        });
        cy.get('[data-testid="button-addMealPlan"]').click();
    }

    preencheDetalhesPlano() {
        cy.get('[data-testid="input-planName"]').type("Plano Automatizado");

        // Data de início aleatória no calendário
        cy.get('[data-testid="input-startDatePlan"]').click();

        const mesInicioAleatorio = faker.number.int({ min: 8, max: 11 });
        const diaInicioAleatorio = faker.number.int({ min: 1, max: 28 });

        cy.get('select[name="months"]').select(`${mesInicioAleatorio}`);
        cy.get('button[name="day"]').contains(diaInicioAleatorio).click();
        cy.get('[data-testid="input-startDatePlan"]').click();


        // Data de fim aleatória no calendário
        cy.get('[data-testid="input-endDatePlan"]').click();

        const mesFimAleatorio = faker.number.int({ min: 0, max: 11 });
        const anoFimAleatorio = faker.number.int({ min: 2025, max: 2026 });
        const diaFimAleatorio = faker.number.int({ min: 1, max: 28 });

        cy.get('select[name="months"]').select(`${mesFimAleatorio}`);
        cy.get('select[name="years"]').select(`${anoFimAleatorio}`);
        cy.get('button[name="day"]').contains(diaFimAleatorio).click();
        cy.get('[data-testid="input-endDatePlan"]').click();
    }

    selecionaBtnAddRefeicao() {
        cy.contains('button', 'Adicionar refeição').click();
    }

    preencheRefeicao() {
        cy.get('input[name="meals.0.name"]').clear().type("Refeição Automatizada");

        // Seleciona horário aleatório
        const horaAleatoria = faker.number.int({ min: 0, max: 23 });
        const minutoAleatorio = faker.number.int({ min: 0, max: 59 });

        cy.get('[data-testid="input-hourMeal"]').clear().type(`${horaAleatoria}:${minutoAleatorio}`);
        cy.get('[data-testid="input-minutesMeal"]').clear().type(`${minutoAleatorio}`);
    }

    selecionaBtnAddAlimento() {
        cy.contains('button', 'Adicionar alimento').click();
    }

    preencheAlimento() {
        cy.get('button[title="Selecione um alimento"]').click();
        cy.get('[role="option"]').then($options => {
            const randomIndex = Math.floor(Math.random() * $options.length);
            cy.wrap($options[randomIndex]).click();
        });
    }

    selecionaBtnSalvarPlano() {
        cy.contains('button', 'Salvar plano alimentar').click();
    }
}


export default new CriarPlano;