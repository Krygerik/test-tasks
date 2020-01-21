// @flow
import { compareReducer } from './compare'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

export const rootReducer = combineReducers({
  compare: compareReducer,
  form: formReducer,
})
