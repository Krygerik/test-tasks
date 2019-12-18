import React, { Component } from "react";
import getCutedUserData from '../functional/getCutedUserData';

/**
 * @description
 * Компонент для сравнения данных в 2 полях ввода.
 * Сравниваемые данные: "имя фамилия" и "дата рождения" в формате dd.mm.yyyy
 * Порядок данных не учитывается, как и все прочие символы
 */
export class CompareUserData extends Component {
  constructor() {
    super();
    this.state = {
      firstUserData: '',
      secondUserData: '',
      isNotValidFirstValue: false,
      isNotValidSecondValue: false,
      isEqualUserData: undefined
    },

    this.handlerCompareData = this.handlerCompareData.bind(this);
    this.saveFirstData = this.saveFirstData.bind(this);
    this.saveSecondData = this.saveSecondData.bind(this);
  }

  handlerCompareData () {
    const { firstUserData, secondUserData } = this.state;

    const {
      fio: firstFio,
      date: firstDate,
      error: firstError
    } = getCutedUserData(firstUserData);

    const {
      fio: secondFio,
      date: secondDate,
      error: secondError
    } = getCutedUserData(secondUserData);

    this.setState({
      isNotValidFirstValue: firstError,
      isNotValidSecondValue: secondError
    })
    
    if (!firstError && !secondError) {
      this.setState({
        isEqualUserData: (firstFio === secondFio && firstDate === secondDate)
      })
    }
  }

  saveFirstData (event) {
    this.setState({
      firstUserData: event.target.value,
      isNotValidFirstValue: false
    })
  }

  saveSecondData (event) {
    this.setState({
      secondUserData: event.target.value,
      isNotValidSecondValue: false
    })
  }

  render() {
    const {
      isNotValidFirstValue,
      isNotValidSecondValue,
      isEqualUserData
    } = this.state;

    return (
      <div>
        <label htmlFor="firstInputData">Первый ввод</label>
        <input id="firstInputData" onChange={this.saveFirstData} />
        { isNotValidFirstValue && <span>Введено недостаточно данных для сравнения</span>}
        
        <label htmlFor="secondInputData">Второй ввод</label>
        <input id="secondInputData" onChange={this.saveSecondData} />
        { isNotValidSecondValue && <span>Введено недостаточно данных для сравнения</span>}

        <button onClick={this.handlerCompareData}>Сравнить введенные данные!</button>

        { (isEqualUserData !== undefined) 
            && (isEqualUserData
              ? <span>Введенные значения равны!</span>
              : <span>Введенные значения не равны!</span>)
        }
      </div>
    );
  }
}
