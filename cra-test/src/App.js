import React, { Component } from 'react';
import smallImage from './small.png';
import bigImage from './big.jpeg';
import TodoList from './TodoList';

class App extends Component {
  
  render() {
    const value = '123'.padStart(5, '0')
    return (
      <div className="App">
        <img src={bigImage} />
        <img src={smallImage} />
        <p>{value}</p>
        <TodoList />
      </div>
    );
  }
}

export default App;
