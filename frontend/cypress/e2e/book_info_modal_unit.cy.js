// Testes para BookInfoModal.vue
describe('BookInfoModal.vue', () => {
  beforeEach(() => {
    // Visita a página ou componente que contém o BookInfoModal.vue
    cy.visit('/');
  });

  it('should allow editing a book', () => {
    // Abre o diálogo do modal
    cy.get('#more-info-btn-10').click();
    cy.get('#save_id').click();

    // Edita os campos do livro
    cy.get('#editebook_title_id').type('Título Editado');
    cy.get('#editebook_publisher_id').type('Editora Editada');
    cy.get('#editbook_value_id').type('123.45');
    cy.get('#editbook_pages_id').type('123');
    cy.get('#editbook_author_id').type('Ian Sommerville{enter}', { force: true });

    // Salva as alterações
    cy.get('#save_id').click();
  });

  it('should allow closing the modal without saving', () => {
    // Abre o diálogo do modal
    cy.get('#more-info-btn-10').click();

    // Fecha o modal sem salvar
    cy.get('#cancel_id').click();
  });
});
