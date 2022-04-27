import React, { Component } from 'react'

class Message extends Component {

    constructor() {
        super() 
        this.state={
            message : 'This is Black'
          }
    }
    changeMessage(){
        if(this.state.message==='This is Black'){
          this.setState({
            message:'This is White'
          })
        }
        else{
          this.setState({
            message : 'This is Black'
          })
        }
      }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Change state</button>
            </div>
        )
    }
}

export default Message;