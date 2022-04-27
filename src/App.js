import React, { Component } from 'react'
import './App.css';
import  Greet  from './components/Greet'
import  Welcome  from './components/Welcome'
import  Message  from './components/Message'
import  FunctionClick  from './components/FunctionClick'
import  ClassClick  from './components/ClassClick'
import  EventBind  from './components/EventBind'
import ConditionalRendering  from './components/ConditionalRendering'
import List from './components/List'
import Person from './components/Person'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import Liftingstate from './components/Liftingstate'
import Refsdemo from './components/Refsdemo'


class App extends Component {

  // state = {
  //   count:0
  // };
  // increment = () => {
  //   this.setState({
  //     count: this.state.count+1
  //   });
  // };
  // decrement = () => {
  //   this.setState({
  //     count: this.state.count-1
  //   });
  // };

  render() {
    return (
      <div className="App">
        <Refsdemo />
        {/* <Liftingstate 
        count={this.state.count}
        decrement={this.decrement}
        increment={this.increment} />
        <Liftingstate 
        count={this.state.count}
        decrement={this.decrement}
        increment={this.increment} /> */}
        {/* <LifecycleA /> */}
        {/* <Form /> */}
        {/* <List /> */}
        {/* <Person /> */}
        {/* <ConditionalRendering /> */}
        {/* <EventBind /> */}
         {/* <ClassClick />
        <FunctionClick /> */}
        {/* <Message /> */}
        {/* <Greet name="Pavi" heroName="Suresh"> </Greet>
          <p>Child prop</p>
        <Greet name="Bari" heroName="Vijay" ></Greet>
          <button>Click here</button>
        <Greet name="Sneha" heroName="Saravanan" ></Greet>
          <p>Hey!</p>
        <Welcome name="Pavi" heroName="Suresh"/>
        <Welcome name="Bari" heroName="Vijay"/>
        <Welcome name="Sneha" heroName="Saravanan"/> */}
      </div>
    );
  }
}


export default App;
