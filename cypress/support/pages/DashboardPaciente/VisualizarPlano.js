class VisualizarPlano {

    visualizarAlimentosRefeicao() {
        cy.get(':nth-child(1) > .flex-col > .justify-between > .h-8').click()
    }
}

export default new VisualizarPlano();