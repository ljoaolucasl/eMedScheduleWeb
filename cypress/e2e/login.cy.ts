describe('Login page', () => {
  it('Deve mostrar notificação de erro de email não preenchido', () => {
    cy.visit('/');
    cy.get('[data-cy=txtPassword]').type('Teste@123');
    cy.get('[data-cy=btnLogin]').click();
    cy.contains('You must enter a value');
  });

  it('Deve mostrar notificação de erro de email inválido', () => {
    cy.visit('/');
    cy.get('[data-cy=txtEmail]').type('testegmail.com');
    cy.get('[data-cy=btnLogin]').click();
    cy.contains('Not a valid email');
  });

  it('Deve mostrar notificação de erro de senha não preenchida', () => {
    cy.visit('/');
    cy.get('[data-cy=txtEmail]').type('teste@gmail.com');
    cy.get('[data-cy=btnLogin]').click();
    cy.contains('You must enter a value');
  });

  it('Deve mostrar notificação de erro de email ou senha inválidos', () => {
    cy.visit('/');
    cy.get('[data-cy=txtEmail]').type('test2@gmail.com');
    cy.get('[data-cy=txtPassword]').type('Test2@123');
    cy.get('[data-cy=btnLogin]').click();
    cy.contains('Login or password invalid');
  });

  it('Deve logar e redirecionar usuário', () => {
    cy.login('joao@gmail.com', 'Joao@123');
  });
});
