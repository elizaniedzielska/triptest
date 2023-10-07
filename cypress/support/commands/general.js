
Cypress.Commands.add('clickElem', (selector) => {
    cy.get(selector).click()
})

Cypress.Commands.add('clickElemByContains', (selector, text) => {
    cy.get(selector).contains(text).click()
})

Cypress.Commands.add('clickElemIndex', (selector, i) => {
    cy.get(selector).eq(i).click()
})

Cypress.Commands.add('typeData', (selector, data) => {
    cy.get(selector).type(data)
})

Cypress.Commands.add('typeDataIndex', (selector, i, data) => {
    cy.get(selector).eq(i).type(data)
})

Cypress.Commands.add('typeDataIndexDelay', (selector, i, data, amount) => {
    cy.get(selector).eq(i).type(data, {delay: amount})
})

Cypress.Commands.add('selectOption', (selector, option) => {
    cy.get(selector).select(option)
})

Cypress.Commands.add('shouldHaveText', (selector, data) => {
    cy.get(selector).should('have.text', data)
})

Cypress.Commands.add('shouldHaveTextIndex', (selector, i, data) => {
    cy.get(selector).eq(i).should('have.text', data)
})

Cypress.Commands.add('shouldVisible', (selector) => {
    cy.get(selector).should('be.visible')
})

Cypress.Commands.add('shouldVisibleHaveText', (selector, data) => {
    cy.get(selector).should('be.visible').and('have.text', data)
})

Cypress.Commands.add('shouldVisibleContainText', (selector, data) => {
    cy.get(selector).should('be.visible').and('contain.text', data)
})

Cypress.Commands.add('shouldVisibleContains', (text) => {
    cy.contains(text).should('be.visible')
})

Cypress.Commands.add('shouldVisibleHaveTextIndex', (selector, i, data) => {
    cy.get(selector).eq(i).should('be.visible').and('have.text', data)
})

Cypress.Commands.add('shouldHaveLengthGT', (selector, number) => {
    cy.get(selector).should('have.length.greaterThan', number)
})

Cypress.Commands.add('shouldHaveValue', (selector, value) => {
    cy.get(selector).should('have.value', value)
})

Cypress.Commands.add('shouldHaveValueIndex', (selector, i, value) => {
    cy.get(selector).eq(i).should('have.value', value)
})

Cypress.Commands.add('checkURL', (url) => {
    cy.url().should('include', url)
})

Cypress.Commands.add('containsShouldVisible', (selector, text) => {
    cy.get(selector).contains(text).should('be.visible')
})

Cypress.Commands.add('invokeTextByContains', (selector, text, alias) => {
    cy.get(selector).contains(text).invoke('text').as(alias)
})





