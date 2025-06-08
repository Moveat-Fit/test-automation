# Testes Automatizados - Projeto Final ADS: Moveat

Este repositório contém testes automatizados end-to-end (E2E) utilizando [Cypress](https://www.cypress.io/) para o sistema de gestão de planos alimentares, desenvolvido como Projeto Final do 5º semestre de Análise e Desenvolvimento de Sistemas.

## Estrutura do Projeto

- **cypress/e2e/Fluxo nutricionista/**: Testes do fluxo de cadastro, login e gerenciamento de nutricionistas e pacientes.
  - **0-cadastroNutricionista.cy.js**: Cadastro de nutricionista (válido, email existente, campos em branco).
  - **1-loginNutricionista.cy.js**: Login do nutricionista (sucesso, senha incorreta, email não cadastrado).
  - **2-cadastroPaciente.cy.js**: Cadastro de paciente (válido, email existente, campos obrigatórios).
  - **3-leituraPaciente.cy.js**: Visualização/listagem de pacientes cadastrados.
  - **4-removerPaciente.cy.js**: Remoção de paciente (confirmação, cancelamento, paciente inexistente).
  - **5-atualizarDadosPaciente.cy.js**: Edição/atualização dos dados do paciente.
  - **6-criarPlanoAlimentar.cy.js**: Criação de plano alimentar para paciente.
  - **7-removerPlanoAlimentar.cy.js**: Remoção de plano alimentar.
  - **8-editarPlanoAlimentar.cy.js**: Edição de plano alimentar.
- **cypress/e2e/Fluxo paciente/**: Testes do fluxo de pacientes.
  - **1-loginPaciente.cy.js**: Login do paciente (sucesso, senha incorreta, email não cadastrado).
  - **2-visualizarPlanoAlimentar.cy.js**: Visualização do plano alimentar, mensagens de erro para paciente sem plano.
- **cypress/e2e/Outras validações/**: Testes de regras de negócio e validações gerais.
  - **validacoesSenha.cy.js**: Validação de regras de senha (força, obrigatoriedade, confirmação).
- **cypress/support/pages/**: Page objects para facilitar a manutenção dos testes.
- **cypress/support/dadosLogin.js**: Dados de login de teste.
- **cypress/support/geradorDadosFaker.js**: Geração de dados dinâmicos com Faker.

## Dependências

Certifique-se de ter o Cypress instalado. Você pode instalar com:

```bash
npm install cypress --save-dev
```

Recomenda-se também ter Node.js (16+) e npm/yarn instalados.

## Como Executar os Testes

1. Abra o terminal na raiz do projeto.
2. Execute o Cypress com o comando:

```bash
npx cypress open
```

3. Na interface do Cypress, selecione o arquivo de teste desejado para rodar os testes.

Ou, para rodar todos os testes em modo headless:

```bash
npx cypress run
```

## Funcionalidades Testadas

### Fluxo Nutricionista
- **Cadastro de nutricionista:**
  - Cadastro com dados válidos
  - Cadastro com email já existente
  - Cadastro com campos obrigatórios em branco
- **Login do nutricionista:**
  - Login com sucesso
  - Login com senha incorreta
  - Login com email não cadastrado
- **Cadastro de paciente:**
  - Cadastro com dados válidos
  - Cadastro com email já existente
  - Cadastro com campos obrigatórios em branco
- **Leitura de pacientes:**
  - Visualização/listagem de pacientes cadastrados
- **Remoção de paciente:**
  - Remoção com confirmação
  - Cancelamento da remoção
  - Tentativa de remover paciente inexistente
- **Atualização de dados do paciente:**
  - Edição e atualização dos dados do paciente
- **Plano alimentar:**
  - Criação de plano alimentar
  - Remoção de plano alimentar
  - Edição de plano alimentar

### Fluxo Paciente
- **Login do paciente:**
  - Login com sucesso
  - Login com senha incorreta
  - Login com email não cadastrado
- **Visualização de plano alimentar:**
  - Visualização correta das refeições do dia
  - Mensagem de erro para paciente sem plano alimentar

### Outras Validações
- **Validações de senha:**
  - Força da senha
  - Obrigatoriedade
  - Confirmação de senha

## Comandos Personalizados

Os comandos de login estão definidos em `cypress/support/commands.js`:

- `cy.loginProfissional(email, senha)`
- `cy.loginPaciente(email, senha)`

## Geração de Dados Dinâmicos

A biblioteca [@faker-js/faker](https://fakerjs.dev/) foi utilizada para gerar dados aleatórios e evitar duplicidade em cadastros.

## Boas Práticas

- Cada teste cobre um cenário específico (positivo e negativo).
- Mensagens e elementos são validados para garantir o correto funcionamento e feedback ao usuário.
- Funções utilitárias e page objects centralizam ações repetitivas, facilitando manutenção.


---

**Desenvolvido por:**  
Ana Carollyne Guimarães de Souza - QA
