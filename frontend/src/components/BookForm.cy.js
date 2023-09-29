import BookForm from './BookForm.vue'

describe('<BookForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(BookForm)
  })
})