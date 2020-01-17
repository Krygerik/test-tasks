// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  changeFirstInputValue,
  changeSecondInputValue,
  changeValidationStatuses,
  type ChangeableStatusesType,
} from '../actions/compareActions'
import type { CompareStateType } from '../reducers/compare'
import { CompareUserData } from '../components/CompareUserData'

type CompareUserDataContainerPropsType = {
  changeFirstInputValueAction: string => string,
  changeSecondInputValueAction: string => string,
  changeValidationStatusesAction: any => ChangeableStatusesType,
  compare: CompareStateType,
}

export class CompareUserDataContainer extends Component<CompareUserDataContainerPropsType> {
  render() {
    const {
      compare,
      changeFirstInputValueAction,
      changeSecondInputValueAction,
      changeValidationStatusesAction,
    } = this.props

    return (
      <CompareUserData
        firstValue={compare.firstValue}
        secondValue={compare.secondValue}
        changeFirstInputValue={changeFirstInputValueAction}
        changeSecondInputValue={changeSecondInputValueAction}
        changeValidationStatuses={changeValidationStatusesAction}
        firstValueIsNotValid={compare.firstValueIsNotValid}
        secondValueIsNotValid={compare.secondValueIsNotValid}
        isEqualUserData={compare.isEqualUserData}
      />
    )
  }
}

const mapStateToProps = store => {
  return {
    compare: store.compare,
  }
}

const mapDispatchToProps = dispatch => ({
  changeFirstInputValueAction: userData =>
    dispatch(changeFirstInputValue(userData)),
  changeSecondInputValueAction: userData =>
    dispatch(changeSecondInputValue(userData)),
  changeValidationStatusesAction: statuses =>
    dispatch(changeValidationStatuses(statuses)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompareUserDataContainer)
