describe('BookForm.vue', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('submits new book', () => {
    const bookTitle = 'Novo Livro'
    const bookPublisher = 'Nova Editora'
    const bookPages = '123'
    const bookAuthor = '6519bfbc104c87c4dbf4eb97'

    cy.intercept('POST', '/livros/cadastrar', (req) => {
      assert.equal(req.body.titulo, bookTitle)
      assert.equal(req.body.editora, bookPublisher)
      assert.equal(req.body.paginas, bookPages)
      assert.equal(req.body.autor, bookAuthor)
    }).as('postBook')

    cy.get('#new_book_id').click()
    cy.get('#title_id').type(bookTitle)
    cy.get('#publishing_id').type(bookPublisher)
    cy.get('#pages_id').type(bookPages)
    cy.get('#select_authors_id').type('Ian Sommerville{enter}', { force: true });
    cy.get('#save_id').click()

    cy.wait('@postBook')
  })
})
