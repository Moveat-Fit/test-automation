/* COMANDO PERSONALIZADO DE LOGIN PARA TESTES FUTUROS */
import LoginPage from "./pages/LoginPage";

Cypress.Commands.add('login', (email, senha) => {
    LoginPage.visitLogin();
    LoginPage.preencheEmail(email);
    LoginPage.preencheSenha(senha);
    LoginPage.btnEntrar();
})