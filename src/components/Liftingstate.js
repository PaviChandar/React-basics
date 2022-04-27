import React, { Component } from 'react'

class Liftingstate extends Component {
    render() {
        return (
            <div>
                <div>count : {this.props.count}</div>
                <button onClick={this.props.increment}>Increment</button>
                <button onClick={this.props.decrement}>Decrement</button>
            </div>
        );
    }
}

export default Liftingstate;