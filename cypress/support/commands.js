/* COMANDO PERSONALIZADO DE LOGIN PARA TESTES FUTUROS */
import LoginPage from "./pages/LoginPage";

Cypress.Commands.add('loginNutricionista', (email, senha) => {
    LoginPage.visitLogin();
    LoginPage.selecionaNutricionista();
    LoginPage.preencheEmail(email);
    LoginPage.preencheSenha(senha);
    LoginPage.btnEntrar();
})