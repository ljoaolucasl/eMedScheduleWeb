export class DoctorSetup {
  public static getDoctorForm() {
    return {
      name: () => cy.get('[data-cy=txtName]'),
      crm: () => cy.get('[data-cy=txtCRM]'),
      add: () => cy.get('[data-cy=btnAdd]'),
    };
  }
}
