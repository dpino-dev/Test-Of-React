/// <reference types="cypress" />

describe('Home page', () => {
  it('passes', () => {
    cy.visit('/')
  })
})


describe('Show view Details', () => {
  it('passes', () => {
    cy.visit('/details')
  })
})

describe('Click on button Back', () => {
  beforeEach('passes', () => {
    cy.visit('/details')
  })

  it('Sucess', () => {
    cy.get('#back').click()
    cy.focused().click()
    cy.contains('Back').click()
  })
})

describe('Click on button Show Details', () => {
  beforeEach('passes', () => {
    cy.visit('/')
  })

  it('Sucess', () => {
    cy.get('button').type('Show details').click()
    cy.focused().click()
  })
})


describe('The Home Page', () => {
  beforeEach(() => {

    cy.request('https://spacelaunchnow.me/api/3.3.0/launch/')

  })

  it('successfully loads', () => {

    cy.visit('/')
  })
})