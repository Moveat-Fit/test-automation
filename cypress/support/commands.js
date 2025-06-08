/* COMANDO PERSONALIZADO DE LOGIN PARA TESTES FUTUROS */
import LoginPage from "./pages/Autenticacao/LoginPage";

Cypress.Commands.add('loginProfissional', (email, senha) => {
    LoginPage.visitLogin();
    LoginPage.selecionaProfissional();
    LoginPage.preencheEmail(email);
    LoginPage.preencheSenha(senha);
    LoginPage.btnEntrar();
})

Cypress.Commands.add('loginPaciente', (email, senha) => {
    LoginPage.visitLogin();
    LoginPage.selecionaPaciente();
    LoginPage.preencheEmail(email);
    LoginPage.preencheSenha(senha);
    LoginPage.btnEntrar();
})