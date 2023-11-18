// Testes para BookList.vue
describe('BookList.vue', () => {
  beforeEach(() => {
    // Visita a página ou componente que contém o BookList.vue
    cy.visit('/');
  });

  it('should render correctly', () => {
    // Verifica se a lista de livros está sendo renderizada
    cy.get('.book-card').should('be.visible');
  });

  it('should open book info modal', () => {
    // Clica no botão de mais informações do primeiro livro
    cy.get('#more-info-btn-0').click();

    // Verifica se o modal de informações do livro foi aberto
    cy.get('#modal_title_id').should('be.visible');
  });

  it('should display book details correctly', () => {
    // Clica no botão de mais informações do primeiro livro
    cy.get('#more-info-btn-0').click();

    // Verifica se os detalhes do livro estão sendo exibidos corretamente
    cy.get('#card_title').should('be.visible');
    cy.get('#book_publisher').should('be.visible');
    cy.get('#book_author_id').should('be.visible');
    cy.get('#book_pages_id').should('be.visible');
  });
});
