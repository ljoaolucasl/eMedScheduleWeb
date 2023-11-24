import { DoctorSetup } from './doctor-test.setup';

describe('Testando cadastro de doctors', () => {
  beforeEach(() => {
    cy.login('joao@gmail.com', 'Joao@123');
    cy.get('[data-cy=btnDoctor]').click();
    cy.get('[data-cy=btnAdd]').click();
  });

  it('Deve entrar na pagina de inserir doctor', () => {
    cy.url().should('contain', '/doctor/add');
  });

  it('Deve mostrar notificação de erro de nome não preenchido', () => {
    const form = DoctorSetup.getDoctorForm();

    form.crm().type('12345-SC');
    form.add().click();
    cy.contains('You must enter a value');
  });

  it('Deve mostrar notificação de erro de nome não com no mínimo 3 caracteres', () => {
    const form = DoctorSetup.getDoctorForm();

    form.name().type('te');
    form.crm().type('12345-SC');
    form.add().click();
    cy.contains('Minimum 3 characters');
  });

  it('Deve mostrar notificação de erro de CRM não preenchido', () => {
    const form = DoctorSetup.getDoctorForm();

    form.name().type('test');
    form.add().click();
    cy.contains('You must enter a value');
  });

  it('Deve mostrar notificação de erro de CRM no formato inválido', () => {
    const form = DoctorSetup.getDoctorForm();

    form.name().type('test');
    form.crm().type('1234-SC');
    form.add().click();
    cy.contains('CRM in invalid format');
  });

  it('Deve redirecionar usuario e mostrar mensagem de sucesso ao cadastrar doctor sem erros', () => {
    const form = DoctorSetup.getDoctorForm();

    form.name().type('doctorTeste');
    form.crm().type('12345-SC');
    form.add().click();
    cy.contains('has been successfully registered!');
    cy.url().should('contain', '/doctor/list');
  });
});
