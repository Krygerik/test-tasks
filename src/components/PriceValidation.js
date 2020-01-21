// @flow
import React, { Component } from 'react'
import { SubmissionError } from 'redux-form'
import PriceValidationForm from './PriceValidationForm'

export default class PriceValidation extends Component<{}> {
  submitPrice = (values: any): void => {
    const { price, maxPrice, minPrice } = values
    const LESS_MIN = minPrice ? Number(price) < Number(minPrice) : false
    const HIGHER_MAX = maxPrice ? Number(price) > Number(maxPrice) : false

    if (LESS_MIN) {
      throw new SubmissionError({
        price: 'Цена не может быть меньше минимальной',
        _error: 'Цена на соответствует указанному интервалу',
      })
    } else if (HIGHER_MAX) {
      throw new SubmissionError({
        price: 'Цена не может быть больше максимальной',
        _error: 'Цена на соответствует указанному интервалу',
      })
    }

    alert('Установленная цена: ' + price)
  }

  render() {
    return (
      <div className="task">
        <span className="title-task">Задание 2</span>
        <span>
          Используя reduxForm, написать компонент с полем ввода для цены товара.
          <br />
          Должна присутствовать валидация на макс и мин значения. Значения
          валидации берутся из других инпутов.
        </span>
        <PriceValidationForm onSubmit={this.submitPrice} />
      </div>
    )
  }
}
