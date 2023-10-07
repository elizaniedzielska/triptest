import selectors from '../../fixtures/selectors/tripSearch.json'

Cypress.Commands.add('simpleSearch', (fromCity, toCity) => {

    // Generate future date
    const date = new Date()
    const day = date.getDay() + 2

    // Fill in search inputs
    cy.typeDataIndexDelay(selectors.pointA, 0, fromCity + '{downArrow}{enter}', 300)
    cy.typeDataIndexDelay(selectors.pointB, 0, toCity + '{downArrow}{enter}', 300)
    cy.clickElem('[data-cy="' + day + '"]')

    // Invoke selected values for validation in next steps
    cy.get(selectors.pointA).first().invoke('val').as('fromCity')
    cy.get(selectors.pointB).first().invoke('val').as('toCity')
    cy.get(selectors.calendar).first().invoke('text').as('pickedDate')

    // Go to the next step
    cy.clickElemIndex(selectors.searchBtn, 0)
    cy.checkURL('/configurator?adults=2&children=0&currency=0&departureAt=')

})