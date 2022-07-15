/// <reference types="Cypress"/>
import {mobileReplenishment} from "../../support/pages/mobileReplenisment"
import {transfers} from "../../support/pages/transfers"
import {basePage} from "../../support/pages/basePage"

it('Replenishment of Ukraine mobile phone', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')

        mobileReplenishment.typePhoneNumber('672223355')
        basePage.typeAmount('1')
        basePage.typeDebitCardData('4552331448138217','0524','111')
        basePage.submitPayment()   
        mobileReplenishment.checkDebitCard('4552 **** **** 8217')
        mobileReplenishment.checkDebitAmount('1')
        mobileReplenishment.checkDebitComission('2')
        mobileReplenishment.checkPaymentCurrency('UAH')
})

it('Money transfer between foreign card', ()=>{
    cy.visit('https://next.privat24.ua/money-transfer/card?lang=en')

        basePage.typeDebitCardData('4552331448138217', '0524', '111')
        transfers.typeDebitNameAndSurname('Shayne', 'McConnell')
        transfers.typeDebitCardReceiver('5309233034765085')
        cy.wait(1000)
        transfers.typeDebitNameAndSurnameReceiver('Juliana', 'Janssen')
        basePage.typeAmount('400')
        transfers.typeComment('testtesttest') 
        cy.wait(2000)
        basePage.submitPayment()
        transfers.checkDebitAndReceiverCards('4552 3314 4813 8217', '5309 2330 3476 5085')
        transfers.checkDebitAmountAndTotal('400 UAH', '515.27')
        transfers.checkDebitCommission('115.27 UAH')
        transfers.checkTotalAmount('515.27')
        transfers.checkComment('testtesttest')
})
