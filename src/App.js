import React, { Component } from 'react';
import Home from './components/Home';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
