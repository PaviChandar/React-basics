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
    
    componentDidMount() {
        console.log('LifecycleB componentdidmount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleB getSnapshotBeforeUpdate');
        return null
    }

    render() {
         
            console.log('Lifecycle B render')
            return <div>Lifecycle B</div>
        
    }
}

export default LifecycleB;
