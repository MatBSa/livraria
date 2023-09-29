describe('Book List', () => {
  beforeEach(() => {
    cy.visit('/') // ajuste para a URL correta do seu aplicativo
  })

  it('successfully loads', () => {
    cy.get('#book-card-0').should('be.visible')
  })

  it('displays book details', () => {
    cy.get('#book-title-0').should('be.visible')
    cy.get('#book-editora-0').should('be.visible')
    cy.get('#book-text-0').should('be.visible')
  })

  it('opens book modal', () => {
    cy.get('#more-info-btn-0').click()
    cy.get('#modal-book-title').should('be.visible')
    cy.get('#modal-book-text').should('be.visible')
  })

  // Adicione mais testes conforme necessário para cobrir todos os casos de uso
})
