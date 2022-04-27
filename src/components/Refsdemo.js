import React, { Component } from 'react';

 class Refsdemo extends Component {

    constructor(props) {
      super(props)
    
      this.state = React.createRef()
      this.cbRef = null
      this.setCbRef = (element) => {
            this.cbRef = element
      }
      
    }
    componentDidMount() {
        this.cbRef.focus()
        // this.state.current.focus()
        // console.log(this.state)
    }
    clickHandler = () => {
        alert(this.state.current.value)
    }
    
  render() {
    return (
      <div>
       <input type="text" ref={this.state}></input>
       <input type="text" ref={this.setCbRef}></input>
       <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default Refsdemo
