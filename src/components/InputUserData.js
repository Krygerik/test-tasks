import React, { Component } from "react";
import '../styles/InputUserData.css';

export class InputUserData extends Component {
  render() {
    const {
      id,
      label,
      onChange,
      isNotValid
    } = this.props;

    return (
      <div className="inputUDBlock">
        <div className="workAreaUD">
          <label htmlFor={id}
                className="titleUserDataBlock"
                >
                {label}
          </label>
          <input id={id}
                onChange={onChange}
                className="inputUserDataBlock"
          />
        </div>
        {isNotValid && <span className="errorInputUserData">Введено недостаточно данных для сравнения</span>}
      </div>
    )
  }
}