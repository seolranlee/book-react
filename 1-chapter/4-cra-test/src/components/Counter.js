import React, { Component } from 'react';

const actions = {
    init() {
        return { counter: 0 }
    },
    increment(state) {
        console.log('state', state)
        return { counter: state.counter + 1 }
    },
    decrement(state) {
        return { counter: state.counter - 1 }
    },
}
class Counter extends Component {
    state = actions.init()

    onIncrement = () => {
        this.setState(actions.increment)
    }
    render() {
        console.log('render called')
        const { counter } = this.state
        return (
            <div>
               <button onClick={this.onIncrement}>+</button>
               <button onClick={this.onDecrement}>-</button>
               <h1>{ counter }</h1>
            </div>
        );
    }
}

export default Counter;