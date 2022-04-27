import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            name : "Pavi"
        }
        console.log('LifecycleB constructor')
    }

    static getDerviedStateFromProps(props,state) {
        console.log('LifecycleB getderivedstatefromprops ')
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentdidmount')
    }
    render() {
         
            console.log('Lifecycle B render')
            return <div>Lifecycle B</div>
        
    }
}

export default LifecycleB;