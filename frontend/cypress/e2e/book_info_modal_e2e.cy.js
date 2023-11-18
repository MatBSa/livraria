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
})
