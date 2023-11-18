describe('BookInfoModal.vue', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('edits book info', () => {
    const bookTitle = 'Livro Editado'
    const bookPublisher = 'Editora Editada'
    const bookPages = '321'
    const bookAuthor = '6519bfbc104c87c4dbf4eb97'

    cy.intercept('PUT', '/livros/atualizar/*', (req) => {
      assert.equal(req.body.titulo, bookTitle)
      assert.equal(req.body.editora, bookPublisher)
      assert.equal(req.body.paginas, bookPages)
      assert.equal(req.body.autor, bookAuthor)
    }).as('putBook')

    cy.get('#more-info-btn-10').click();
    cy.get('#save_id').click();
    cy.get('#editebook_title_id').clear().type(bookTitle)
    cy.get('#editebook_publisher_id').clear().type(bookPublisher)
    cy.get('#editbook_pages_id').clear().type(bookPages)
    cy.get('#editbook_author_id').type('Ian Sommerville{enter}', { force: true })
    cy.get('#save_id').click()

    cy.wait('@putBook')
  })

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
})
