// @flow
import React, { Component } from 'react'
import CompareUserDataContainer from '../containers/CompareUserDataContainer'
import PriceValidation from './PriceValidation'
import './App.css'

export default class App extends Component<{}> {
  render() {
    return (
      <div className="main">
        <div className="header">
          <h1>Тестовые задания</h1>
        </div>
        <CompareUserDataContainer />
        <PriceValidation />
      </div>
    )
  }
}
