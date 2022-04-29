import React, { Component } from 'react'

class LifecycleA extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            name : 'Pavi'
        }
        console.log('LifecycleA constructor')
    }

    static getDerviedStateFromProps(props,state) {
        console.log('LifecycleA getderivedstatefromprops ')
        return <div>{this.state.name}</div>
    }

    componentDidMount() {
        console.log('Lifecycle A componentdidmount')
    }
    
     shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate');
    }

    changeState = () => {
        this.setState({
            name : 'Viswas'
        })
    }
    render() {
         
            console.log('Lifecycle A render')
             return(
                <div>
                     <div>Lifecycle A</div>
                       <button onClick={this.changeState}>Click</button>
                       <LifecycleB />
                </div>
             )
        
    }
}

export default LifecycleA
