import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  changeInputValue,
  changeValidationStatuses,
} from '../actions/compareActions'
import { CompareUserData } from '../components/CompareUserData'

/**
 * @description
 * Компонент для сравнения данных в 2 полях ввода.
 * Сравниваемые данные: "имя фамилия" и "дата рождения" в формате dd.mm.yyyy
 * Порядок данных не учитывается, как и все прочие символы
 */
export class CompareUserDataContainer extends Component {
  render() {
    const {
      compare,
      changeInputValueAction,
      changeValidationStatusesAction,
    } = this.props

    return (
      <CompareUserData
        firstValue={compare.firstValue}
        secondValue={compare.secondValue}
        changeInputValue={changeInputValueAction}
        changeValidationStatusesAction={changeValidationStatusesAction}
        firstValueIsNotValid={compare.firstValueIsNotValid}
        secondValueIsNotValid={compare.secondValueIsNotValid}
        isEqualUserData={compare.isEqualUserData}
      />
    )
  }
}

CompareUserDataContainer.propTypes = {
  changeInputValueAction: PropTypes.func,
  changeValidationStatusesAction: PropTypes.func,
  compare: PropTypes.exact({
    firstValue: PropTypes.string,
    secondValue: PropTypes.string,
    firstValueIsNotValid: PropTypes.bool,
    secondValueIsNotValid: PropTypes.bool,
    isEqualUserData: PropTypes.bool,
  }),
}

const mapStateToProps = store => {
  return {
    compare: store.compare,
  }
}

const mapDispatchToProps = dispatch => ({
  changeInputValueAction: userData => dispatch(changeInputValue(userData)),
  changeValidationStatusesAction: statuses =>
    dispatch(changeValidationStatuses(statuses)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompareUserDataContainer)
