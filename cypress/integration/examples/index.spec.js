it('Page title', () => {
  cy.visit('/')
  cy.get('h1#title').should(
    'be.text',
    'Cypress Example'
  )
})
