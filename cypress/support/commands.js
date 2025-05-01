/* COMANDO PERSONALIZADO DE LOGIN PARA TESTES FUTUROS */
import LoginPage from "./pages/Autenticacao/LoginPage";

Cypress.Commands.add('loginProfissional', (email, senha) => {
    LoginPage.visitLogin();
    LoginPage.selecionaProfissional();
    LoginPage.preencheEmail(email);
    LoginPage.preencheSenha(senha);
    LoginPage.btnEntrar();
})