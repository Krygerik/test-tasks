import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  changeFirstUserData,
  changeSecondUserData,
  changeFirstValidStatus,
  changeSecondValidStatus,
  changeStatusComparison,
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
      changeFirstUserDataAction,
      changeSecondUserDataAction,
      changeFirstValidStatusAction,
      changeSecondValidStatusAction,
      changeStatusComparisonAction,
    } = this.props

    return (
      <CompareUserData
        firstValue={compare.firstValue}
        secondValue={compare.secondValue}
        changeFirstUserData={changeFirstUserDataAction}
        changeSecondUserData={changeSecondUserDataAction}
        changeFirstValidStatus={changeFirstValidStatusAction}
        changeSecondValidStatus={changeSecondValidStatusAction}
        changeStatusComparison={changeStatusComparisonAction}
        isNotValidFirstValue={compare.isNotValidFirstValue}
        isNotValidSecondValue={compare.isNotValidSecondValue}
        isEqualUserData={compare.isEqualUserData}
      />
    )
  }
}

CompareUserDataContainer.propTypes = {
  changeFirstUserDataAction: PropTypes.func,
  changeSecondUserDataAction: PropTypes.func,
  changeFirstValidStatusAction: PropTypes.func,
  changeSecondValidStatusAction: PropTypes.func,
  changeStatusComparisonAction: PropTypes.func,
  compare: PropTypes.exact({
    firstValue: PropTypes.string,
    secondValue: PropTypes.string,
    isNotValidFirstValue: PropTypes.bool,
    isNotValidSecondValue: PropTypes.bool,
    isEqualUserData: PropTypes.bool,
  }),
}

const mapStateToProps = store => {
  return {
    compare: store.compare,
  }
}

const mapDispatchToProps = dispatch => ({
  changeFirstUserDataAction: userData =>
    dispatch(changeFirstUserData(userData)),
  changeSecondUserDataAction: userData =>
    dispatch(changeSecondUserData(userData)),
  changeFirstValidStatusAction: status =>
    dispatch(changeFirstValidStatus(status)),
  changeSecondValidStatusAction: status =>
    dispatch(changeSecondValidStatus(status)),
  changeStatusComparisonAction: status =>
    dispatch(changeStatusComparison(status)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompareUserDataContainer)
