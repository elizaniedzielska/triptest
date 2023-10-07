import selectors from '../../fixtures/selectors/completeBookingPage.json'
import data from '../../fixtures/test_data/completeBookingPage.json'

Cypress.Commands.add('completeBooking', function () {

    // Validate summary
    cy.containsShouldVisible("h6:visible", this.fromCity)
    cy.containsShouldVisible("h6:visible", this.toCity)
    cy.containsShouldVisible("span:visible", this.pickedDate)
    cy.containsShouldVisible("h4:visible", this.pickedCar)
    
    // Fill in email and go to the next step
    cy.typeData(selectors.emailInput, data.email)
    cy.clickElem(selectors.saveAndContinue)

})