import React, { Component } from "react";
import { CompareUserData } from "./CompareUserData";
import { CheckFormatUserData } from "./CheckFormatUserData";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Тестовые задания</h1>
        <CompareUserData />
        <CheckFormatUserData />
      </div>
    );
  }
}

export default App;