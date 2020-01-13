import {
  CHANGE_FIRST_USER_DATA,
  CHANGE_SECOND_USER_DATA,
  CHANGE_FIRST_VALID_STATUS,
  CHANGE_SECOND_VALID_STATUS,
  CHANGE_STATUS_COMPARISON,
} from '../actions/compareActions'

export const initialState = {
  firstValue: '',
  secondValue: '',
  isNotValidFirstValue: false,
  isNotValidSecondValue: false,
  isEqualUserData: undefined,
}

export function compareReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FIRST_USER_DATA:
      return {
        ...state,
        firstValue: action.payload,
        isNotValidFirstValue: false,
      }
    case CHANGE_SECOND_USER_DATA:
      return {
        ...state,
        secondValue: action.payload,
        isNotValidSecondValue: false,
      }
    case CHANGE_FIRST_VALID_STATUS:
      return {
        ...state,
        isNotValidFirstValue: action.payload,
      }
    case CHANGE_SECOND_VALID_STATUS:
      return {
        ...state,
        isNotValidSecondValue: action.payload,
      }
    case CHANGE_STATUS_COMPARISON:
      return {
        ...state,
        isEqualUserData: action.payload,
      }
    default:
      return state
  }
}
