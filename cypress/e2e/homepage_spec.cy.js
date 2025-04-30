describe('homepage spec', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://127.0.0.1:3000/api/v1/subscriptions", {
      statusCode: 200,
      fixture: "subscriptions"
    })

    cy.intercept("GET", "http://127.0.0.1:3000/api/v1/subscriptions/2", {
      statusCode: 200,
      fixture: "subscription"
    })

    cy.visit('http://localhost:5173/')
  })

  it('Displays the application title', () => {
    cy.get('h1').should('contain', 'Subscription')
  })

  it('Displays all subscriptions', () => {
    cy.get('.subscriptions').should('exist')
    cy.get('.subscription').should('have.length', 2)
    cy.get('.subscription').first().find('h3').should('have.text', "demo teas")
    cy.get('.subscription').first().find('p').should('have.length', 4)
    cy.get('.subscription').last().find('h3').should('have.text', "demo teas 2")
    cy.get('.subscription').last().find('p').should('have.length', 4)
  })

  it('Navigates to the details page when a subscription is clicked on', () => {
    cy.get('.subscriptions').last().click()
    cy.url().should('eq', "http://localhost:5173/subscriptions/2")
  })
})