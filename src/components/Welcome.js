import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.heroName} is father of {this.props.name}</h2>
            </div>
        )
    }
}

export default Welcome;
