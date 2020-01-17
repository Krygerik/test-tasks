// @flow
import {
  CHANGE_FIRST_INPUT_VALUE,
  CHANGE_SECOND_INPUT_VALUE,
  CHANGE_VALIDATION_STATUSES,
  type ChangeActionType,
} from '../actions/compareActions'

export type CompareStateType = {
  +firstValue: string,
  +secondValue: string,
  +firstValueIsNotValid: boolean,
  +secondValueIsNotValid: boolean,
  +isEqualUserData?: boolean,
}

export const initialState: CompareStateType = {
  firstValue: '',
  secondValue: '',
  firstValueIsNotValid: false,
  secondValueIsNotValid: false,
  isEqualUserData: undefined,
}

export function compareReducer(
  state: CompareStateType = initialState,
  action: ChangeActionType
): CompareStateType {
  switch (action.type) {
    case CHANGE_FIRST_INPUT_VALUE:
      return {
        ...state,
        firstValue: action.payload,
        firstValueIsNotValid: false,
      }
    case CHANGE_SECOND_INPUT_VALUE:
      return {
        ...state,
        secondValue: action.payload,
        secondValueIsNotValid: false,
      }

    case CHANGE_VALIDATION_STATUSES:
      return {
        ...state,
        firstValueIsNotValid: action.payload.firstValueIsNotValid,
        secondValueIsNotValid: action.payload.secondValueIsNotValid,
        isEqualUserData: action.payload.isEqualUserData,
      }
    default:
      return state
  }
}
