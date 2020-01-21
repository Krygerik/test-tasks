// @flow
import React, { Component } from 'react'
import { InputUserData } from './InputUserData'
import type { ChangeableStatusesType } from '../actions/compareActions'
import './CompareUserData.css'

type CompareUserDataPropsType = {
  +changeFirstInputValue: string => any,
  +changeSecondInputValue: string => any,
  +changeValidationStatuses: any => ChangeableStatusesType,
  +firstValue: string,
  +secondValue: string,
  +firstValueIsNotValid: boolean,
  +secondValueIsNotValid: boolean,
  +isEqualUserData?: boolean,
}

type CutedInputValueType = {|
  fio: string | null,
  date: string | null,
  error: boolean,
|}

export class CompareUserData extends Component<CompareUserDataPropsType> {
  getCutedUserData = (inputData: string): CutedInputValueType => {
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
    const { firstValue, secondValue, changeValidationStatuses } = this.props

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

    changeValidationStatuses({
      firstValueIsNotValid: firstError,
      secondValueIsNotValid: secondError,
      isEqualUserData:
        !firstError && !secondError
          ? firstFio === secondFio && firstDate === secondDate
          : undefined,
    })
  }

  saveFirstInputValue = (
    event: SyntheticInputEvent<HTMLInputElement>
  ): void => {
    this.props.changeFirstInputValue(event.currentTarget.value)
  }

  saveSecondInputValue = (
    event: SyntheticInputEvent<HTMLInputElement>
  ): void => {
    this.props.changeSecondInputValue(event.currentTarget.value)
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
          onChange={this.saveFirstInputValue}
          isNotValid={firstValueIsNotValid}
        />
        <InputUserData
          id="secondValue"
          label="Второй ввод"
          onChange={this.saveSecondInputValue}
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
