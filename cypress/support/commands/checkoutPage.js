import selectors from '../../fixtures/selectors/checkoutPage.json'
import data from '../../fixtures/test_data/CheckoutPage.json'

Cypress.Commands.add('completeCheckoutSimple', function () {

    // Validate summary
    cy.containsShouldVisible('h6:visible', this.fromCity)
    cy.containsShouldVisible('h6:visible', this.toCity)
    cy.containsShouldVisible('span:visible', this.pickedDate)
    cy.containsShouldVisible('h4:visible', this.pickedCar)
    
    // Fill in Lead passenger section
    cy.typeData(selectors.firstName, data.name)
    cy.typeData(selectors.lastName, data.lastName)
    cy.typeData(selectors.birthDay, data.birthDay)
    cy.get(selectors.birthMonth).then(()=>{
      cy.clickElem(selectors.months.february)
    })
    cy.typeData(selectors.birthYear, data.birthYear)
    cy.typeData(selectors.phoneNumber, data.phoneNumber)

    cy.clickElem(selectors.isBusinessTrip.no)

    cy.intercept('GET', 'https://sgtm.mydaytrip.com/g/collect?v=**&richsstsse').as('confirmation')

    // Pick payment type and confirm
    cy.clickElemByContains('button:visible', 'Cash')
    cy.clickElem(selectors.confirm)

    cy.wait('@confirmation', {timeout: 20000})
    cy.checkURL('/urgent-booking?')
    cy.containsShouldVisible('h1:visible', data.bookingConfirmation)

})