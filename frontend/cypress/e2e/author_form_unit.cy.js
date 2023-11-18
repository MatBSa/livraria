// Testes para AuthorForm.vue
describe('AuthorForm.vue', () => {
  beforeEach(() => {
    // Visita a página ou componente que contém o AuthorForm.vue
    cy.visit('/');
  });

  it('should allow adding a new author', () => {
    // Abre o diálogo do formulário
    cy.get('button').contains('Novo Autor').click();

    // Preenche o formulário
    cy.get('#author_name_id').type('Nome do Autor');
    cy.get('#author_nationality_id').type('Nacionalidade do Autor');

    // Submete o formulário
    cy.get('#save_id').click();

    // Verifica se o diálogo do formulário foi fechado
    cy.get('#author-form').should('not.exist');
  });

  it('should allow closing the form without saving', () => {
    // Abre o diálogo do formulário
    cy.get('button').contains('Novo Autor').click();

    // Fecha o formulário sem salvar
    cy.get('#close_id').click();

    // Verifica se o diálogo do formulário foi fechado
    cy.get('#author-form').should('not.exist');
  });
});
