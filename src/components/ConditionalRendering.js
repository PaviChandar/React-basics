import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message : true
        }
    }
    render() {

       return this.state.message ? (<div>Hi Stranger</div>) : (<div>Hi Guest</div>)

        // let message;
        // if(this.state.message) {
        //     message = <div>Hi Stranger</div>
                    
        // } else {
        //     message = <div>Hi Guest</div>
        // }
        // return <div>{message}</div>
    }



    //     if(this.state.message) {
    //         return <div>Hi Stranger</div>
            
    //     } else {
    //         return <div>Hi Guest</div>
    //     }
    // }
}

export default ConditionalRendering;