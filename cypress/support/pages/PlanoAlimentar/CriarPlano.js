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
        cy.get('[data-testid="input-startDatePlan"]').click();
        const mesInicioAleatorio = faker.number.int({ min: 8, max: 11 });
        const diaInicioAleatorio = faker.number.int({ min: 1, max: 28 });
        cy.get('select[name="months"]').select(`${mesInicioAleatorio}`);
        cy.get('button[name="day"]').contains(diaInicioAleatorio).click();
        cy.get('[data-testid="input-startDatePlan"]').click();

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

    criarPlanoComTentativas(tentativas = 0) {
        this.selecionarBtnCriarPlano();
        cy.contains('h1', 'Criar plano alimentar').should('be.visible');
        this.preencheDetalhesPlano();
        this.selecionaBtnAddRefeicao();
        this.preencheRefeicao();
        this.selecionaBtnAddAlimento();
        this.preencheAlimento();
        this.selecionaBtnSalvarPlano();

        cy.get('body').then($body => {
            if ($body.text().includes('Este paciente já possui um plano alimentar cadastrado')) {
                cy.log('Paciente já possui plano, cancelando e tentando novamente...');
                cy.contains('button', 'Cancelar plano alimentar').click();
                if (tentativas < 5) {
                    cy.wait(500);
                    this.criarPlanoComTentativas(tentativas + 1);
                } else {
                    cy.log('Tentando na próxima página...');
                    cy.get(':nth-child(4) > .inline-flex').then($nextBtn => {
                        if (!$nextBtn.is(':disabled')) {
                            cy.wrap($nextBtn).click();
                            cy.wait(500);
                            this.criarPlanoComTentativas(0); // Reinicia o contador na nova página
                        } else {
                            throw new Error('Não foi possível criar um plano para um paciente novo após várias páginas.');
                        }
                    });
                }
            } else {
                cy.contains('Plano alimentar criado com sucesso').should('be.visible');
            }
        });
    }
}

export default new CriarPlano;