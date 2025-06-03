class EditarPaciente {

    selecionaEditarPacienteAleatorio() {
        cy.get('[href^="/dashboard/professional/edit-patient-info/"] > .inline-flex').filter((index, el) => {
            const href = el.parentElement.getAttribute('href');
            const id = parseInt(href.split('/').pop());
            return id >= 16;
        }).then($botoes => {
            const indice = Math.floor(Math.random() * $botoes.length);
            cy.wrap($botoes[indice]).click(); // pega o botão HTML selecionado e permite o uso do .click()
        });
    }

    editaCampoNome() {
        cy.get('[data-testid="input-firstName"]')
        .click()
        .clear()
        .type('Novo Nome');
    }

    editaCampoSobrenome() {
        cy.get('[data-testid="input-lastName"]')
        .click()
        .clear()
        .type('Novo Sobrenome');
    }

    editaCampoObservacoes() {
        cy.get('[data-testid="textarea-observations"]')
        .click()
        .clear()
        .type('Estas são as novas observações do paciente');
    }

    editarCampoEmailInvalido() {
        cy.get('[data-testid="input-email"]')
        .click()
        .clear();
    }

    editarCampoEmailCadastrado() {
        cy.get('[data-testid="input-email"]')
        .click()
        .clear()
        .type('carol@gmail.com');
    }

    editarCampoCpfVazio() {
        cy.get('[data-testid="input-cpf"]')
        .click()
        .clear();
    }

    editarCampoTelefoneVazio() {
        cy.get('[data-testid="input-phone"]')
        .click()
        .clear();
    }

    selecionaBtnAtualizar() {
        cy.contains('button', 'Atualizar').click();
    }

    selecionaBtnCancelar() {
        cy.contains('button', 'Cancelar atualização').click();
    }

}

export default new EditarPaciente;