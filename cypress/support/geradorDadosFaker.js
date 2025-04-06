import { pt_BR, fakerPT_BR } from '@faker-js/faker';

// Função para gerar senha (usada por: Personal e Nutricionista)
const gerarSenha = () => {
    const maiuscula = fakerPT_BR.string.alpha({length: 1, casing: 'upper'});
    const minuscula = fakerPT_BR.string.alpha({length: 1, casing: 'lower'});
    const numero = fakerPT_BR.string.numeric(1);
    const especial = fakerPT_BR.string.fromCharacters('!');
    const restante = fakerPT_BR.string.alphanumeric(4);

    //Embaralha e retorna
    return (maiuscula+minuscula+numero+especial+restante).split('').sort(() => 0.5 - Math.random()).join('');
}


// Função genérica para gerar dados básicos
const gerarDadosBasicos = () => {
    return {
        nome: fakerPT_BR.person.fullName(),
        email: fakerPT_BR.internet.email(),
        cpf: fakerPT_BR.string.numeric(11),
        telefone: fakerPT_BR.string.numeric(11),
        senha: gerarSenha()
    };
};

// Função de gerar dados de um Personal
export const gerarDadosPersonalTrainer = () => {
    return {
        ...gerarDadosBasicos(),
        cref: fakerPT_BR.helpers.fromRegExp('[0-9]{6}-G/SP').toUpperCase() //Ex: 0000/SP
    };
};

// Função de gerar dados de um Nutricionista
export const gerarDadosNutricionista = () => {
    return {
        ...gerarDadosBasicos(),
        crn: fakerPT_BR.string.numeric(5) //Ex: 00000
    };
};
