describe('AuthorForm.vue', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('submits new author', () => {
    const authorName = 'Novo Autor'
    const authorNationality = 'Brasileira'

    cy.intercept('POST', '/autores/cadastrar', (req) => {
      assert.equal(req.body.nome, authorName)
      assert.equal(req.body.nacionalidade, authorNationality)
    }).as('postAuthor')

    cy.get('button').contains('Novo Autor').click()
    cy.get('#author_name_id').type(authorName)
    cy.get('#author_nationality_id').type(authorNationality)
    cy.get('#save_id').click()

    cy.wait('@postAuthor')
  })
})
