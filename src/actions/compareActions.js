export const CHANGE_USER_DATA = 'CHANGE_USER_DATA'
export const CHANGE_VALIDATION_STATUSES = 'CHANGE_VALIDATION_STATUSES'

export function changeInputValue(userData) {
  return {
    type: CHANGE_USER_DATA,
    payload: userData,
  }
}

export function changeValidationStatuses(statuses) {
  return {
    type: CHANGE_VALIDATION_STATUSES,
    payload: statuses,
  }
}
