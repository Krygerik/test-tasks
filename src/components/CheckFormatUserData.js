import React, { Component } from "react";
import getCutedUserData from '../functional/getCutedUserData';

/**
 * @description
 * Компонент предназначен для проверки соответствия
 * введенной строки формату ввода пользовательских данных
 * "ФИО" и "дата в формате dd.mm.yyyy", в любом порядке
 */
export class CheckFormatUserData extends Component {
  constructor() {
    super();
    this.state = {
      isNotValid: undefined
    },

    this.handlerChangeTextarea = this.handlerChangeTextarea.bind(this);
  }

  handlerChangeTextarea (event) {
    const { error } = getCutedUserData(event.target.value);
    
    this.setState({
      isNotValid: error
    })
  }

  render() {
    const { isNotValid } = this.state;

    return (
      <div>
        <textarea placeholder="Я не понял, что от меня требуется сделать в этом заданииииии"
                  onChange={this.handlerChangeTextarea}/>
        { (isNotValid !== undefined) 
            && (
              isNotValid
                ? <span>Значение не соответствует формату пользовательских данных</span>
                : <span>Значение соответствует формату пользовательских данных</span>
            )
        }
      </div>
    )
  }
}