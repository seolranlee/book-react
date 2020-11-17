import React, { Component } from 'react';

class Data extends Component {
    // color = 'red'
    state = {
        color: 'red'
    }
    onClick = () => {
        this.setState({
            color: 'blue'
        })
        // this.color = 'blue'
    }
    render() {
        // const { color } = this.state
        return (
            <div>
                <button style={{backgroundColor: this.color}} onClick={this.onClick}>좋아요</button>
            </div>
        );
    }
}

export default Data;