// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './store/configureStore.js'
import { Provider } from 'react-redux'
import App from './components/App'

const root = document.getElementById('root')

if (root !== null) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  )
}
