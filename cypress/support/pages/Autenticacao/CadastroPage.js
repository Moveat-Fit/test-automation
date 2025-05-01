/* Ações específicas da página de Cadastro */
class CadastroPage {
    visitCadastro() {
        cy.visit('/register')
    }

    // Selecionar tipo de usuário
    selecionaPersonalTrainer(){
        cy.get('#Personal\\ Trainer').click();
    }
    selecionaNutricionista(){
        cy.get('#Nutricionista').click();
    }

    /*
    selecionaPaciente(){
        cy.get('#Paciente').click();
    }
    */

    // Preencher formulário
    preencheNome(nome){
        cy.get('#name').type(nome);
    }
    preencheEmail(email){
        cy.get('#email').type(email);
    }
    preencheCPF(cpf){
        cy.get('#cpf').type(cpf);
    }
    preencheCREF(cref){
        cy.get('#personal-trainer').type(cref);
    }
    preencheCRN(crn){
        cy.get('#nutricionista').type(crn);
    }
    preencheTelefone(telefone){
        cy.get('#cellphone').type(telefone);
    }
    preencheSenha(senha){
        cy.get('input[type="password"][placeholder="Senha"]').type(senha);
    }
    preencheConfirmarSenha(senha){
        cy.get('input[type="password"][placeholder="Confirmar senha"]').type(senha);
    }

    btnCadastrar(){
        cy.contains('button', 'Cadastrar').click();
    }
    btnLogar(){
        cy.contains('button', 'Já possuo uma conta').click();
    }
}

export default new CadastroPage(); 