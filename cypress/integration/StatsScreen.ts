describe('StatsScreen', () => {
  it('loads stats', () => {
    cy.visit('/')

    cy.contains('Stats').click()

    cy.contains('Stats')

    cy.contains('Current Streak')
    cy.contains('0 days')

    cy.contains('Days Left')
    cy.contains('0 sessions')

    cy.contains('Task Time')
    cy.contains('0 minutes')
  })
})
