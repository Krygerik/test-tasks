export const CHANGE_FIRST_USER_DATA = 'CHANGE_FIRST_USER_DATA'
export const CHANGE_SECOND_USER_DATA = 'CHANGE_SECOND_USER_DATA'
export const CHANGE_FIRST_VALID_STATUS = 'CHANGE_FIRST_VALID_STATUS'
export const CHANGE_SECOND_VALID_STATUS = 'CHANGE_SECOND_VALID_STATUS'
export const CHANGE_STATUS_COMPARISON = 'CHANGE_STATUS_COMPARISON'

export function changeFirstUserData(userData) {
  return {
    type: CHANGE_FIRST_USER_DATA,
    payload: userData,
  }
}

export function changeSecondUserData(userData) {
  return {
    type: CHANGE_SECOND_USER_DATA,
    payload: userData,
  }
}

export function changeFirstValidStatus(status) {
  return {
    type: CHANGE_FIRST_VALID_STATUS,
    payload: status,
  }
}

export function changeSecondValidStatus(status) {
  return {
    type: CHANGE_SECOND_VALID_STATUS,
    payload: status,
  }
}

export function changeStatusComparison(status) {
  return {
    type: CHANGE_STATUS_COMPARISON,
    payload: status,
  }
}
