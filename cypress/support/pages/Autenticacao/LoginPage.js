/* Ações específicas da página de Login encapsuladas na classe LoginPage */

class LoginPage {
    visitLogin() {
        cy.visit('/login')
    }

    selecionaProfissional() {
        cy.contains('button', 'Profissional').click();
    }

    selecionaPaciente() {
        cy.contains('button', 'Paciente')
    }

    preencheEmail(email) {
        cy.get('#login').type(email);
    }
    preencheSenha(senha) {
        cy.get('#password').type(senha);
    }
    btnEntrar() {
        cy.contains('button', 'Entrar').click();
    }
}

export default new LoginPage();