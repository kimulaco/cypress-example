it('Page title', () => {
  cy.visit('http://localhost:3000/')
  cy.get('h1#title').should(
    'be.text',
    'Cypress Example'
  )
})
