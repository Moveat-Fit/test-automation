class EditarPlano {
    editarPlanoComTentativas(tentativas = 0) {
        // Seleciona paciente aleatório
        cy.get('[data-testid="button-optionsMealPlan"]').then($btns => {
            if ($btns.length === 0) {
                cy.log('Nenhum paciente nesta página.');
                // Tenta próxima página
                cy.get(':nth-child(4) > .inline-flex').then($nextBtn => {
                    if (!$nextBtn.is(':disabled')) {
                        cy.wrap($nextBtn).click();
                        cy.wait(500);
                        this.editarPlanoComTentativas(0);
                    } else {
                        throw new Error('Não há pacientes com plano para editar.');
                    }
                });
                return;
            }
            const randomIndex = Math.floor(Math.random() * $btns.length);
            cy.wrap($btns[randomIndex]).click();

            // Verifica se existe botão de editar plano
            cy.get('body').then($body => {
                if ($body.find('[data-testid="button-updateMealPlan"]').length > 0) {
                    cy.get('[data-testid="button-updateMealPlan"]').click();
                    cy.contains('h1', 'Editar plano alimentar').should('be.visible');

                    // Exemplo de edição: altera nome do plano
                    cy.get('[data-testid="input-planName"]').clear().type('Plano Editado Automaticamente');
                    cy.contains('button', 'Salvar alterações').click();

                    cy.contains('Plano alimentar atualizado com sucesso').should('be.visible');
                } else {
                    cy.log('Paciente não possui plano para editar.');
                    if (tentativas < 5) {
                        cy.wait(500);
                        this.editarPlanoComTentativas(tentativas + 1);
                    } else {
                        cy.log('Tentando na próxima página...');
                        cy.get(':nth-child(4) > .inline-flex').then($nextBtn => {
                            if (!$nextBtn.is(':disabled')) {
                                cy.wrap($nextBtn).click();
                                cy.wait(500);
                                this.editarPlanoComTentativas(0);
                            } else {
                                throw new Error('Não há pacientes com plano para editar após várias páginas.');
                            }
                        });
                    }
                }
            });
        });
    }

    abrirEdicaoPlanoAleatorio(tentativas = 0) {
        cy.get('[data-testid="button-optionsMealPlan"]').then($btns => {
            if ($btns.length === 0) {
                cy.get(':nth-child(4) > .inline-flex').then($nextBtn => {
                    if (!$nextBtn.is(':disabled')) {
                        cy.wrap($nextBtn).click();
                        cy.wait(500);
                        this.abrirEdicaoPlanoAleatorio(0);
                    } else {
                        throw new Error('Não há pacientes com plano para editar.');
                    }
                });
                return;
            }
            const randomIndex = Math.floor(Math.random() * $btns.length);
            cy.wrap($btns[randomIndex]).click();
            cy.get('body').then($body => {
                if ($body.find('[data-testid="button-updateMealPlan"]').length > 0) {
                    cy.get('[data-testid="button-updateMealPlan"]').click();
                    cy.contains('h1', 'Editar plano alimentar').should('be.visible');
                } else if (tentativas < 5) {
                    cy.wait(500);
                    this.abrirEdicaoPlanoAleatorio(tentativas + 1);
                } else {
                    cy.get(':nth-child(4) > .inline-flex').then($nextBtn => {
                        if (!$nextBtn.is(':disabled')) {
                            cy.wrap($nextBtn).click();
                            cy.wait(500);
                            this.abrirEdicaoPlanoAleatorio(0);
                        } else {
                            throw new Error('Não há pacientes com plano para editar após várias páginas.');
                        }
                    });
                }
            });
        });
    }

    salvarComCamposObrigatoriosEmBranco() {
        this.abrirEdicaoPlanoAleatorio();
        cy.get('[data-testid="input-planName"]').clear();
        // Limpe outros campos obrigatórios se necessário
        cy.contains('button', 'Salvar alterações').click();
    }

    salvarSemRefeicoes() {
        this.abrirEdicaoPlanoAleatorio();
        cy.get('.mb-13 > .inline-flex').click();
        cy.contains('button', 'Salvar alterações').click();
    }

    salvarSemAlimentos() {
        this.abrirEdicaoPlanoAleatorio();
        cy.get('[data-testid="button-removeFood"]').click();
        cy.contains('button', 'Salvar alterações').click();
    }
}

export default new EditarPlano();