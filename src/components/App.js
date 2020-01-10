import React, { Component } from 'react'
import { CompareUserData } from './CompareUserData'
import { CheckFormatUserData } from './CheckFormatUserData'
import '../styles/App.css'

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="header">
          <h1>Тестовые задания</h1>
        </div>
        <CompareUserData />
        <CheckFormatUserData />
      </div>
    )
  }
}

export default App
