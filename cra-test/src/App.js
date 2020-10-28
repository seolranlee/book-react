import React, { Component } from 'react';
import smallImage from './small.png';
import bigImage from './big.jpeg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={bigImage} />
        <img src={smallImage} />
      </div>
    );
  }
}

export default App;
