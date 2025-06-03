class RemoverPaciente {

    selecionaRemoverPaciente(){
       cy.get('.text-center > .text-red-600').then($botoes => {
            const indice = Math.floor(Math.random() * $botoes.length);
            cy.wrap($botoes[indice]).click();
        });
    }

    selecionarBtnConfirmar() {
        cy.contains('button', 'Confirmar').click();
    }

    selecionarBtnCancelar() {
        cy.contains('button', 'Cancelar').click();
    }
}
export default new RemoverPaciente();