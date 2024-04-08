describe('My First Test', () => {
  it('Visits person management page', () => {
    cy.visit('http://localhost:4200/person-mgmt')

    cy.contains('New').click()

    // Should be on a new URL which includes '/person'
    cy.url().should('include', '/person')

    // Get an input, type into it
    cy.get('#firstName').type('Ali')

    //  Verify that the value has been updated
    cy.get('#firstName').should('have.value', 'Ali')
  })
})