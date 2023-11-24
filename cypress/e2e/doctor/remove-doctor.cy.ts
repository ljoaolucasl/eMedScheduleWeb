describe('Testando cadastro de doctors', () => {
  before(() => {
    cy.login('joao@gmail.com', 'Joao@123');
    cy.addDoctor();
    cy.logout();
  });

  beforeEach(() => {
    cy.login('joao@gmail.com', 'Joao@123');
    cy.get('[data-cy=btnDoctor]').click();
    cy.wait(3000);
    cy.get('[data-cy=btnRemove]').first().click();
  });

  it('Deve entrar na pagina de remover doctor', () => {
    cy.url().should('contain', '/doctor/delete');
  });

  it('Deve cancelar e ser redirecionado', () => {
    cy.get('[data-cy=btnCancel]').click();
    cy.url().should('contain', '/doctor/list');
  });

  it('Deve deletar e ser redirecionado com mensagem de sucesso', () => {
    cy.get('[data-cy=btnDelete]').click();
    cy.url().should('contain', '/doctor/list');
    cy.contains('has been successfully deleted!');
  });
});
