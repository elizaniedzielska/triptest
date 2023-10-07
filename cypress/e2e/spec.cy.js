import { delay } from "bluebird"
import selectors from "../fixtures/selectors/booking.json"
import data from "../fixtures/test_data/search.json"
import bookingInfo from "../fixtures/test_data/completebooking.json"

const date = new Date()
const day = date.getDay() +2



describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://website.staging.mydaytrip.net/')

    
    cy.get(selectors.pointA).first().type('Berlin{downArrow}{enter}', {delay:300})
    cy.get(selectors.pointB).first().type('aarhus{downArrow}{enter}', {delay:300})

    cy.clickElem('[data-cy="' + day + '"]')

    cy.clickElemIndex( selectors.searchBtn, 0)
    cy.shouldVisibleContains(selectors.sightsCheck)

    cy.clickElemByContains(selectors.moreOptionsBtn)
    cy.clickElemByContains('Van')
    cy.clickElemByContains("Add")

    cy.wait(2000)
    cy.get(selectors.bookTrip).first().click({force:true})

    cy.typeData(selectors.emailInput, bookingInfo.email)
    cy.clickElem(selectors.saveAndContinue)

    cy.typeData(selectors.firstName, bookingInfo.name)
    cy.typeData(selectors.lastName, bookingInfo.lastName)
    cy.typeData(selectors.birthDay, bookingInfo.birthDay)
  
    cy.get(selectors.birthMonth).then(()=>{
      cy.clickElemByContains(bookingInfo.birthMonth)
    })
    cy.typeData(selectors.birthYear, bookingInfo.birthYear)
    cy.typeData(selectors.phoneNumber, bookingInfo.phoneNumber)

    cy.clickElemIndex( selectors.travelingForWork, 1)

    cy.intercept('GET', 'https://sgtm.mydaytrip.com/g/collect?v=**&richsstsse').as('confirmation')
    cy.clickElemByContains('Cash')
    cy.clickElem(selectors.confirm)

    cy.wait('@confirmation').eq(2)

  
  })
})