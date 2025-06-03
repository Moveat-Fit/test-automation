/*selecionaRemoverPacienteAleatorio() {
        cy.get('[href="/dashboard/professional/new-meal-plan/"] > .inline-flex').filter((index, el) => {
            const href = el.parentElement.getAttribute('href');
            const id = parseInt(href.split('/').pop());
            return id >= 16;
        }).then($botoes => {
            const indice = Math.floor(Math.random() * $botoes.length);
            cy.wrap($botoes[indice]).click(); // pega o botão HTML selecionado e permite o uso do .click()
        });
    }*/