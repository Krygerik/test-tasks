import {
  CHANGE_USER_DATA,
  CHANGE_VALIDATION_STATUSES,
} from '../actions/compareActions'

export const initialState = {
  firstValue: '',
  secondValue: '',
  firstValueIsNotValid: false,
  secondValueIsNotValid: false,
  isEqualUserData: undefined,
}

export function compareReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
    case CHANGE_VALIDATION_STATUSES:
      return {
        ...state,
        firstValueIsNotValid: action.payload.firstStatus,
        secondValueIsNotValid: action.payload.secondStatus,
        isEqualUserData: action.payload.compareStatus,
      }
    default:
      return state
  }
}
