
import React from 'react'
//redux
import { Provider } from 'react-redux';
import Store from '../../src/Store';
import LaunchList from '../../src/Components/LaunchList';
import LaunchDetails from '../../src/Components/LaunchDetails';


describe('LaunchList.cy.js', () => {
  it('playground', () => {
     cy.mount(
      <Provider store={Store}>
        <LaunchList />
      </Provider>
     )
  })

})

describe('LaunchDetails.cy.js', () => {
  it('playground', () => {
     cy.mount(
      <Provider store={Store}>
        <LaunchDetails />
      </Provider>
     )
  })
})

