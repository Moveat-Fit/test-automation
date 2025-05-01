/* Ações específicas da página Dashboard do nutricionista */
class LeituraPaciente {
    selecionaVerPacientes() {
        cy.contains('button', 'Ver todos os pacientes').click();
    }

    selecionaCampoPesquisa() {
        cy.get('.relative > .border-input').click();
    }
    preencheCampoPesquisa(nome) {
        cy.get('.relative > .border-input').type(nome);
    }
}

export default new LeituraPaciente();
