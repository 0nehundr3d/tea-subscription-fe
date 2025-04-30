describe('details spec', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://127.0.0.1:3000/api/v1/subscriptions", {
      statusCode: 200,
      fixture: "subscriptions"
    })

    cy.intercept("GET", "http://127.0.0.1:3000/api/v1/subscriptions/2", {
      statusCode: 200,
      fixture: "subscription"
    })

    cy.visit('http://localhost:5173/subscriptions/2')
  })

  it("Displays detailed information about a subscription", () => {
    cy.get('h1').should('contain', 'Subscriptions')
    cy.get('h2').should('contain', 'demo teas 2')
    cy.get('.SubscriptionDetails').find('p').should('have.length', 12)
    cy.get('.tea-container').find('.tea').should('have.length', 2)
    cy.get('.tea-container').find('.tea').first().find('p').should('have.length', 4)
    cy.get('.tea-container').find('.tea').last().find('p').should('have.length', 4)
  })

  it("Can deactivate a subscription with a button click", () => {
    cy.intercept("PATCH", "http://127.0.0.1:3000/api/v1/subscriptions/2", {
      statusCode: 200,
      fixture: 'subscription-inactive'
    })

    cy.get('button').first().click()
    cy.get('#status').should('contain', 'inactive')
  })

  it("Can return to the main page via button click", () => {
    cy.get('button').last().click()
    cy.url().should('eq', "http://localhost:5173/")
  })
})