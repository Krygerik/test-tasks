import { compareReducer } from './compare'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  compare: compareReducer,
})
