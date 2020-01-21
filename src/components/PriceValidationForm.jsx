// @flow
import React from 'react'
import { reduxForm, Field } from 'redux-form'
import './PriceValidation.css'

type PriceValidationFormPropsType = {
  handleSubmit: any => any,
}

const required = value => (value ? undefined : 'Обязательное поле')

const renderMinMaxInput = ({
  input,
  label,
  placeholder,
  type,
  meta: { error },
}: any): any => (
  <div className="minMaxInput priceField">
    <label>{label}</label>
    <div>
      <input
        {...input}
        type={type}
        placeholder={placeholder}
        className={error ? 'error' : ''}
      />
    </div>
    {error && <span>{error}</span>}
  </div>
)

const renderPriceInput = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error },
}: any): any => (
  <div className="priceInput priceField">
    <label>{label}</label>
    <div>
      <input
        {...input}
        type={type}
        placeholder={placeholder}
        className={touched && error ? 'error' : ''}
      />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

let PriceValidationForm = (props: PriceValidationFormPropsType): any => {
  const { handleSubmit } = props

  const onChangeOnlyNumberMask = (event, newValue) => {
    const notNumberRegExp = /[^0-9]/g

    // Я не понял, как сделать маску через дефолтные возможности redux-form
    if (notNumberRegExp.test(newValue)) {
      return event.preventDefault()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="priceForm">
      <Field
        component={renderMinMaxInput}
        type="text"
        name="minPrice"
        label="Минимальная цена"
        placeholder="Не установлена"
        onChange={onChangeOnlyNumberMask}
      />
      <Field
        component={renderMinMaxInput}
        type="text"
        name="maxPrice"
        label="Максимальная цена"
        placeholder="Не установлена"
        onChange={onChangeOnlyNumberMask}
      />
      <Field
        component={renderPriceInput}
        type="text"
        name="price"
        label="Введите цену *"
        placeholder="Не установлена"
        validate={[required]}
        onChange={onChangeOnlyNumberMask}
      />
      <button>Применить</button>
    </form>
  )
}

PriceValidationForm = reduxForm({
  form: 'priceValidation',
})(PriceValidationForm)

export default PriceValidationForm
