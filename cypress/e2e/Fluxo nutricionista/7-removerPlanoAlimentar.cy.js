/// <reference types="cypress" />

import { dadosLogin } from "../../support/dadosLogin";
import RemoverPlano from "../../support/pages/PlanoAlimentar/RemoverPlano";

describe('Dashboard do Nutricionista - Remover plano alimentar de um paciente', () => {
    const login = dadosLogin();
    
    beforeEach(() => {
        cy.loginProfissional(login.emailNutricionista, login.senhaNutricionista);
    });

    /* TESTES POSITIVOS */
    it('Remover plano alimentar', () => {
        RemoverPlano.tentarRemoverPlanoEmTodasPaginas();
        cy.contains('Plano alimentar deletado com sucesso').should('exist');
    });

    it('Cancelar a exclusão do plano', () => {
        RemoverPlano.cancelarRemoverPlano();
        RemoverPlano.confirmarCancelamento();
        cy.contains('Plano alimentar deletado com sucesso').should('not.exist');
    });

    /* TESTES NEGATIVOS */
    it('Validar tratamento de erro ao tentar remover um plano inexistente', () => {
        RemoverPlano.tentarRemoverPlanoInexistente();
        cy.contains('Plano alimentar não encontrado ou não pertence ao profissional').should('be.visible');
    });
})