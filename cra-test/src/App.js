import React, { Component } from 'react';
import smallImage from './small.png';
import bigImage from './big.jpeg';

class App extends Component {
  
  render() {
    const value = '123'.padStart(5, '0')
    return (
      <div className="App">
        <img src={bigImage} />
        <img src={smallImage} />
        <p>{value}</p>
      </div>
    );
  }
}

export default App;
