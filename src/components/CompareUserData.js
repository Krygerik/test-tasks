import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { InputUserData } from '../components/InputUserData'
import '../styles/CompareUserData.css'

export class CompareUserData extends Component {
  /**
   * @description
   * Функция для поиска и взятия даты и фио из переданной строки.
   * Также валидирует строку на наличие данных аттрибутов
   * @param {string} inputData
   */
  getCutedUserData = inputData => {
    const RegExp_DATE = /\d{2}.\d{2}.\d{4}/
    const RegExp_FIO = /[а-яА-Я]+ [а-яА-Я]+ [а-яА-Я]+/

    const CUTED_DATE = inputData.match(RegExp_DATE)
    const CUTED_FIO = inputData.match(RegExp_FIO)

    return {
      fio: CUTED_DATE ? CUTED_DATE[0] : null,
      date: CUTED_FIO ? CUTED_FIO[0] : null,
      error: !CUTED_DATE || !CUTED_FIO,
    }
  }

  handlerCompareData = () => {
    const {
      firstValue,
      secondValue,
      changeFirstValidStatus,
      changeSecondValidStatus,
      changeStatusComparison,
    } = this.props

    const {
      fio: firstFio,
      date: firstDate,
      error: firstError,
    } = this.getCutedUserData(firstValue)

    const {
      fio: secondFio,
      date: secondDate,
      error: secondError,
    } = this.getCutedUserData(secondValue)

    changeFirstValidStatus(firstError)
    changeSecondValidStatus(secondError)

    if (!firstError && !secondError) {
      changeStatusComparison(firstFio === secondFio && firstDate === secondDate)
    }
  }

  saveFirstValue = event => {
    this.props.changeFirstUserData(event.target.value)
  }

  saveSecondValue = event => {
    this.props.changeSecondUserData(event.target.value)
  }

  render() {
    const {
      isNotValidFirstValue,
      isNotValidSecondValue,
      isEqualUserData,
    } = this.props

    return (
      <div className="task">
        <span className="title-task">Задание 1</span>
        <span>
          Написать утилиту проверки на равенство данных (ФИО и дата), не
          учитывая порядок и прочие символы
        </span>
        <InputUserData
          id="firstInputData"
          label="Первый ввод"
          onChange={this.saveFirstValue}
          isNotValid={isNotValidFirstValue}
        />
        <InputUserData
          id="secondInputData"
          label="Второй ввод"
          onChange={this.saveSecondValue}
          isNotValid={isNotValidSecondValue}
        />

        {isEqualUserData !== undefined &&
          (isEqualUserData ? (
            <span className="successCompare">Введенные значения равны!</span>
          ) : (
            <span className="errorCompare">Введенные значения не равны!</span>
          ))}

        <button onClick={this.handlerCompareData} className="btnCompare">
          Сравнить введенные данные!
        </button>
      </div>
    )
  }
}

CompareUserData.propTypes = {
  changeFirstUserData: PropTypes.func,
  changeSecondUserData: PropTypes.func,
  changeFirstValidStatus: PropTypes.func,
  changeSecondValidStatus: PropTypes.func,
  changeStatusComparison: PropTypes.func,
  firstValue: PropTypes.string,
  secondValue: PropTypes.string,
  isNotValidFirstValue: PropTypes.bool,
  isNotValidSecondValue: PropTypes.bool,
  isEqualUserData: PropTypes.bool,
}
