/// <reference types="Cypress"/>

// type

it('type', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="phone-number"]')
        .type(112233444)
})

// focus

it('focus', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
        .focus()
})

// blur

it('blur', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
        .focus()    
        .blur()
})

// clear

it('clear', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
        .type(999)
        .wait(2000)
        .clear()
})

// submit

it('submit', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('form[method="post"]')
        .submit()
})

// click

it('click', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-value="manual"]')
        .click()
})

// right click

it('rclick', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.contains('Right click to edit')
        .rightclick()
})

// dbl click

it('dblclick', () => {
    cy.visit('https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/dblclick_event/_sample_.examples.html')
    cy.contains('My Card')
        .dblclick()
})

// check

it('check', () => {
    cy.visit('https://facebook.com/')
    cy.get('[data-testid="open-registration-form-button"]')
        .click()
        .wait(5000)
    cy.get('input[value="2"]')
        .check()
})

// uncheck

it('uncheck', () => {
    cy.visit('https://en.privatbank.ua')
    cy.get('input#switch-input')
        .check({force: true})
        .wait(2000)
        .uncheck({force: true})
})

// select

it('select', () => {
    cy.visit('https://facebook.com/')
    cy.get('[data-testid="open-registration-form-button"]')
        .click()
        .wait(5000)
    cy.get('select#day')
        .select('14')
    cy.get('select#month')
        .select('10')
    cy.get('select#year')
        .select('2003')
})

// scrollIntoView

it('scrollIntoView', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="lang"]')
        .wait(2000)
        .scrollIntoView()
})

// scrollTo

it('scrollTo', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .wait(3000)
    cy.scrollTo(0, 700)
})

// trigger

it.only('trigger', () => {
    cy.visit('https://next.privat24.ua/?lang=en')
        .contains('Services')
        .trigger('mouseover')
})