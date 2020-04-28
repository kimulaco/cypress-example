it('Page title', () => {
  cy.visit('/')
  cy.get('h1#title').should(
    'have.text',
    'Cypress Example'
  )
})
