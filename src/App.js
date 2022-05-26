import React, { Component } from 'react';
import Calculator from './components/Calculator';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
    constructor(props) {
      super(props);
      this.state = {}
    }

  render() {
    return (
      <div className="App">
        <Calculator className = "calculate" />
      </div>
    );
  }
}

export default App;
