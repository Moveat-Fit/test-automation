import { faker } from '@faker-js/faker';

class RemoverPlano {
    tentarRemoverPlanoEmTodasPaginas() {
        const tentar = (tentativas = 0) => {
            cy.get('[data-testid="button-optionsMealPlan"]').then($btns => {
                if ($btns.length === 0 || tentativas >= 5) {
                    // Se não há mais planos ou atingiu 5 tentativas, tenta avançar para a próxima página
                    cy.get(':nth-child(4) > .inline-flex').then($nextBtn => {
                        if (!$nextBtn.is(':disabled')) {
                            cy.wrap($nextBtn).click();
                            cy.wait(500);
                            tentar(0); // Reinicia o contador para a nova página
                        } else {
                            cy.log('Não há mais planos para remover.');
                        }
                    });
                    return;
                }
                const randomIndex = Math.floor(Math.random() * $btns.length);
                cy.wrap($btns[randomIndex]).click();
                cy.get('[data-testid="button-removeMealPlan"]').click();
                cy.contains('button', 'Confirmar').click();

                cy.get('body').then($body => {
                    const texto = $body.text();
                    if (texto.includes('Plano alimentar deletado com sucesso')) {
                        cy.log('Plano alimentar deletado com sucesso');
                        // NÃO chama tentar() novamente aqui, assim o teste para!
                    } else if (texto.includes('Plano alimentar não encontrado ou não pertence ao profissional')) {
                        cy.log('Plano não encontrado, tentando novamente...');
                        cy.wait(500);
                        tentar(tentativas + 1); // Soma tentativa
                    }
                });
            });
        };
        tentar(0);
    }

    cancelarRemoverPlano() {
        cy.get('[data-testid="button-optionsMealPlan"]').then($btns => {
            const randomIndex = Math.floor(Math.random() * $btns.length);
            cy.wrap($btns[randomIndex]).click();
        });
        cy.get('[data-testid="button-removeMealPlan"]').click();
    }
    confirmarCancelamento() {
        cy.contains('button', 'Cancelar').click();
    }

    tentarRemoverPlanoInexistente() {
        cy.get('[data-testid="button-optionsMealPlan"]').then($btns => {
            if ($btns.length === 0) {
                cy.log('Nenhum plano disponível para tentar remover.');
                return;
            }
            const randomIndex = Math.floor(Math.random() * $btns.length);
            cy.wrap($btns[randomIndex]).click();
            cy.get('[data-testid="button-removeMealPlan"]').click();
            cy.contains('button', 'Confirmar').click();
        });
    }
    
}

export default new RemoverPlano();