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
    render() {
         
            console.log('Lifecycle A render')
            return  <div>Lifecycle A</div>
            // return(
            //     <div>
            //         <div>Lifecycle A</div>
            //         <LifecycleB />
            //     </div>
            // )
        
    }
}

export default LifecycleA