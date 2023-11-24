describe('First access to the application', () => {
  it('Should redirect to the login page', () => {
    cy.visit('/');
    cy.url().should('contain', 'login');
  });
});
