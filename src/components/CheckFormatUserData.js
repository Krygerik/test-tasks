import React, { Component } from 'react'
import getCutedUserData from '../functional/getCutedUserData'
import '../styles/CheckFormatUserData.css'

/**
 * @description
 * Компонент предназначен для проверки соответствия
 * введенной строки формату ввода пользовательских данных
 * "ФИО" и "дата в формате dd.mm.yyyy", в любом порядке
 */
export class CheckFormatUserData extends Component {
  constructor() {
    super()
    this.state = {
      isNotValid: undefined,
    }
  }

  handlerChangeTextarea = event => {
    const { error } = getCutedUserData(event.target.value)

    this.setState({
      isNotValid: error,
    })
  }

  render() {
    const { isNotValid } = this.state

    return (
      <div className="task">
        <span className="title-task">Задание 2</span>
        {isNotValid !== undefined &&
          (isNotValid ? (
            <span className="errorCheckFormat">
              Значение не соответствует формату пользовательских данных
            </span>
          ) : (
            <span className="successCheckFormat">
              Значение соответствует формату пользовательских данных
            </span>
          ))}
        <textarea
          placeholder="Я не понял, что от меня требуется сделать в этом заданииииии"
          onChange={this.handlerChangeTextarea}
          className="checkFormatTextarea"
        />
      </div>
    )
  }
}
