// Testes para BookForm.vue
describe('BookForm.vue', () => {
  beforeEach(() => {
    // Visita a página ou componente que contém o BookForm.vue
    cy.visit('/');
  });

  it('should allow adding a new book', () => {
    // Abre o diálogo do formulário
    cy.get('#new_book_id').click();

    // Preenche o formulário
    cy.get('#title_id').type('Título do Livro');
    cy.get('#publishing_id').type('Editora do Livro');
    cy.get('#pages_id').type('123');
    cy.get('#select_authors_id').type('Ian Sommerville{enter}', { force: true });

    // Submete o formulário
    cy.get('#save_id').click();

    // Verifica se o diálogo do formulário foi fechado
    cy.get('#book-form').should('not.exist');
  });

  it('should allow closing the form without saving', () => {
    // Abre o diálogo do formulário
    cy.get('#new_book_id').click();

    // Fecha o formulário sem salvar
    cy.get('#close_id').click();

    // Verifica se o diálogo do formulário foi fechado
    cy.get('#book-form').should('not.exist');
  });
});
