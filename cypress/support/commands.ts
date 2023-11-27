declare namespace Cypress {
  interface Chainable<Subject = any> {
    login(email: string, password: string): typeof login;
    logout(): typeof logout;
    addDoctor(): typeof addDoctor;
    removeDoctor(): typeof removeDoctor;
  }
}

class DoctorSetup {
  public static getDoctorForm() {
    return {
      name: () => cy.get('[data-cy=txtName]'),
      crm: () => cy.get('[data-cy=txtCRM]'),
      add: () => cy.get('[data-cy=btnAdd]'),
    };
  }
}

function login(email: string, password: string) {
  cy.visit('/');
  cy.get('[data-cy=txtEmail]').type(email);
  cy.get('[data-cy=txtPassword]').type(password);
  cy.get('[data-cy=btnLogin]').click();
  cy.url().should('contain', 'dashboard');
}

function logout() {
  cy.visit('/');
  cy.get('mat-toolbar > .mat-mdc-icon-button').first().click();
  cy.get('[data-cy=btnLogout]').click();
  cy.url().should('contain', 'login');
}

function addDoctor() {
  const form = DoctorSetup.getDoctorForm();

  cy.get('[data-cy=btnDoctor]').click();
  cy.get('[data-cy=btnAdd]').click();

  form.name().type('doctorTeste');
  form.crm().type('12345-SC');
  form.add().click();
  cy.contains('has been successfully registered!');
  cy.url().should('contain', '/doctor/list');
}

function removeDoctor() {
  cy.login('joao@gmail.com', 'Joao@123');
  cy.get('[data-cy=btnDoctor]').click();
  cy.wait(3000);
  cy.get('[data-cy=btnRemove]').first().click();
  cy.get('[data-cy=btnDelete]').click();
  cy.url().should('contain', '/doctor/list');
  cy.contains('has been successfully deleted!');
}

Cypress.Commands.add('login', login);
Cypress.Commands.add('logout', logout);
Cypress.Commands.add('addDoctor', addDoctor);
Cypress.Commands.add('removeDoctor', removeDoctor);
