export class Transfers {

    typeDebitNameAndSurname(name, surname) {
        cy.get('[data-qa-node="firstNamedebitSource"]')
            .type(name)
        cy.get('[data-qa-node="lastNamedebitSource"]')
            .type(surname)
    }

    typeDebitCardReceiver(cardNumber) {
        cy.get('[data-qa-node="numberreceiver"]')
            .type(cardNumber)
    }

    typeDebitNameAndSurnameReceiver(name, surname) {
        cy.get('[data-qa-node="firstNamereceiver"]')
            .type(name)
        cy.get('[data-qa-node="lastNamereceiver"]')
            .type(surname)
    }

    typeComment(comment) {
        cy.get('[data-qa-node="toggle-comment"]')
            .click()
        cy.get('[data-qa-node="comment"]')
            .type(comment)
    }

    checkDebitAndReceiverCards(debitCard, receiverCard) {
        cy.get('[data-qa-node="payer-card"]')
            .should('have.text', debitCard)
        cy.get('[data-qa-node="receiver-card"]')
            .should('have.text', receiverCard)
    }

    checkDebitAmountAndTotal(debitAmount, totalAmount) {
        cy.get('[data-qa-node="payer-amount"]')
            .should('have.text', debitAmount)
        cy.get('[data-qa-node="total"]')
            .find('div')
            .should('contain.text', totalAmount)
    }

    checkDebitCommission(commission) {
        cy.get('[data-qa-node="payer-currency"]')
            .should('have.text', commission)
    }

    checkTotalAmount(totalAmount) {
        cy.get('[data-qa-node="total"]')
            .find('div')
            .should('contain.text', totalAmount)
    }
    
    checkComment(comment) {
        cy.get('[data-qa-node="comment"]')
            .should('have.text', comment)
    }
}

export const transfers = new Transfers()