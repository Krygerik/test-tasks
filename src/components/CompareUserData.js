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
      changeValidationStatusesAction,
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

    changeValidationStatusesAction({
      firstStatus: firstError,
      secondStatus: secondError,
      compareStatus:
        !firstError && !secondError
          ? firstFio === secondFio && firstDate === secondDate
          : undefined,
    })
  }

  saveInputValue = event => {
    const { id, value } = event.target

    this.props.changeInputValue({
      [id]: value,
      [id + 'IsNotValid']: false,
    })
  }

  render() {
    const {
      firstValueIsNotValid,
      secondValueIsNotValid,
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
          id="firstValue"
          label="Первый ввод"
          onChange={this.saveInputValue}
          isNotValid={firstValueIsNotValid}
        />
        <InputUserData
          id="secondValue"
          label="Второй ввод"
          onChange={this.saveInputValue}
          isNotValid={secondValueIsNotValid}
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
  changeInputValue: PropTypes.func,
  changeValidationStatusesAction: PropTypes.func,
  firstValue: PropTypes.string,
  secondValue: PropTypes.string,
  firstValueIsNotValid: PropTypes.bool,
  secondValueIsNotValid: PropTypes.bool,
  isEqualUserData: PropTypes.bool,
}
