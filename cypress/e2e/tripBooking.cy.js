import data from "../fixtures/test_data/tripSearch.json"

describe('Trip booking', () => {

  before(() => {
    cy.visit('')
  })

  it('Should book a trip with one random sight', () => {
    cy.simpleSearch(data.fromCity, data.toCity)
    cy.addRandomSight()
    cy.pickCar('Van')
    cy.acceptRoute()
    cy.completeBooking()
    cy.completeCheckoutSimple()
  })
})