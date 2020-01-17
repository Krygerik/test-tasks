// @flow
export const CHANGE_FIRST_INPUT_VALUE = 'CHANGE_FIRST_INPUT_VALUE'
export const CHANGE_SECOND_INPUT_VALUE = 'CHANGE_SECOND_INPUT_VALUE'
export const CHANGE_VALIDATION_STATUSES = 'CHANGE_VALIDATION_STATUSES'

export type ChangeableStatusesType = {
  firstValueIsNotValid: boolean,
  secondValueIsNotValid: boolean,
  isEqualUserData?: boolean,
}

type ActionType<T, P> = {|
  type: T,
  payload: P,
|}
type ChangeInputValueActionType = ActionType<string, string>
type ChangeValidationStatusesActionType = ActionType<
  string,
  ChangeableStatusesType
>
export type ChangeActionType = ActionType<string, any>

export function changeFirstInputValue(
  changedValue: string
): ChangeInputValueActionType {
  return {
    type: CHANGE_FIRST_INPUT_VALUE,
    payload: changedValue,
  }
}

export function changeSecondInputValue(
  changedValue: string
): ChangeInputValueActionType {
  return {
    type: CHANGE_SECOND_INPUT_VALUE,
    payload: changedValue,
  }
}

export function changeValidationStatuses(
  statuses: ChangeableStatusesType
): ChangeValidationStatusesActionType {
  return {
    type: CHANGE_VALIDATION_STATUSES,
    payload: statuses,
  }
}
