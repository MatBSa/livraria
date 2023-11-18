import BookList from './BookList.vue'

describe('<BookList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(BookList)
  })
})
