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
})
