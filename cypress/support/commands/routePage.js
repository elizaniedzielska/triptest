import selectors from '../../fixtures/selectors/routePage.json'
import data from '../../fixtures/test_data/routePage.json'

Cypress.Commands.add('addRandomSight', () => {

    cy.intercept('POST', '/graphql').as('addSight')

    // Add random sight
    cy.clickElemByContains("button", data.sightBtn)

    // Validate request
    cy.wait('@addSight').then((req) => {
        expect(req.response.statusCode).to.eq(200)
        expect(req.request.body.operationName).to.eql('RequestManagedOffer')
    })

    // Check if sight is added
    cy.containsShouldVisible("div:visible", data.stopsLabel)

})

Cypress.Commands.add('pickCar', (car) => {

    cy.intercept('POST', '/graphql').as('changeCar')

    // Pick car
    cy.clickElemByContains("button", selectors.moreOptionsBtn)
    cy.clickElemByContains("h4:visible", car)
    cy.containsShouldVisible("h4:visible", car)

    // Validate change
    cy.invokeTextByContains("h4:visible", car, "pickedCar")
    cy.wait('@changeCar').its('response.statusCode').should('eq', 200)

})

Cypress.Commands.add('acceptRoute', function () {

    cy.intercept('POST', '/graphql').as('goToBooking')

    // Validate route summary
    cy.shouldHaveValue(selectors.pointA, this.fromCity)
    cy.shouldHaveValue(selectors.pointB, this.toCity)
    cy.shouldHaveText(selectors.calendar, this.pickedDate)

    // Go to next step
    cy.clickElem(selectors.bookTrip)

    cy.wait('@goToBooking').its('response.statusCode').should('eq', 200)
    cy.checkURL('/booking?')

})