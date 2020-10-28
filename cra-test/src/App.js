import React, { Component } from 'react';
import smallImage from './small.png';
import bigImage from './big.jpeg';
import TodoList from './TodoList';
import './test.css'

console.log(`NODE_ENV = ${process.env.NODE_ENV}`)
console.log(`REACT_APP_DATA_API = ${process.env.REACT_APP_DATA_API}`)
console.log(`REACT_APP_LOGIN_API = ${process.env.REACT_APP_LOGIN_API}`)
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
