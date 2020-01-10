import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/InputUserData.css'

export class InputUserData extends Component {
  render() {
    const { id, label, onChange, isNotValid } = this.props

    return (
      <div className="inputUDBlock">
        <div className="workAreaUD">
          <label htmlFor={id} className="titleUserDataBlock">
            {label}
          </label>
          <input id={id} onChange={onChange} className="inputUserDataBlock" />
        </div>
        {isNotValid && (
          <span className="errorInputUserData">
            Введено недостаточно данных для сравнения
          </span>
        )}
      </div>
    )
  }
}

InputUserData.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isNotValid: PropTypes.bool.isRequired,
}
