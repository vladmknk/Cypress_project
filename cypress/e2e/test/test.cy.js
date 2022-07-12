/// <reference types="Cypress"/>

// it('By ID', () => {
//     cy.visit("https://facebook.com/")
//     cy.get('#email')
// })

// it('By Class', () => {
//     cy.visit("https://docs.cypress.io/api/commands/get")
//     cy.get('.DocSearch-Button').click()
//     cy.get('.DocSearch-Input')
// })

// it('By Tag', () => {
//     cy.visit("https://docs.cypress.io/api/commands/get")
//     cy.get('nav')
// })

// it('By Tag Value', () => {
//     cy.visit("https://facebook.com/")
//     cy.get('[name="pass"]')
// })

// it('By Different Tags Value', () => {
//     cy.visit("https://facebook.com/")
//     cy.get('[data-testid="open-registration-form-button"][role="button"]')
// })

// it('By Different Types', () => {
//     cy.visit("https://docs.cypress.io/api/commands/get")
//     cy.get('button[type="button"]')
// })

it('Using get with find and eq', () => {
    cy.visit("https://next.privat24.ua/deposit/open")
    cy.get('tbody').find('td').find('div').find('button').eq(0)
})
beforeEach(() => {
    cy.viewport(1920,1080)
})
it.only('Using get with find and eq', () => {
    cy.visit("https://docs.cypress.io/api/commands/eq#Syntax")
    cy.get('main').find('div.hidden').find('nav').find('ul').find('li').find('a').eq(0)
})