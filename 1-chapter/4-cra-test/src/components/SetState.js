import React, { Component } from 'react';

class SetState extends Component {
    state = {
        count1: 0,
        count2: 0,
    }
    onClick = () => {
        const { count1, count2 } = this.state

        this.setState({ count2: count2 + 1}, () => {console.log('count2 1 증가')})
        this.setState({ count1: count1 + 1}, () => {console.log('count1 1 증가')})
    }
    render() {
        const { count1, count2 } = this.state
        const result = count1 >= count2
        return (
            <div>
                <button onClick={this.onClick}>onClick</button>
                {result ? '참' : '거짓'}
            </div>
        );
    }
}

export default SetState;