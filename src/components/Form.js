import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
          username : "",
          comment : "",
          topic : "React"
        }
    }
    userNameChange = (event) => {
      this.setState({
        username: event.target.value
      })
    }
    
    commentChange = (event) => {
      this.setState({
        comment: event.target.value
      })
    }

    topicChange = (event) => {
      this.setState({
        topic: event.target.value
      })
    }

    submitChange = (event) => {
      alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
    }

    render() {
        return(
          <form onSubmit={this.submitChange}>
              <div>
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={this.userNameChange} />
              </div><br />
              <div>
                <label>Comments</label>
                <input type="textarea" value={this.state.comment} onChange={this.commentChange} />
              </div><br />
              <div>
                <label>Topics</label>
                  <select value={this.state.topic} onChange={this.topicChange}>
                    <option>React</option>
                    <option>Angular</option>
                    <option>Express</option>
                    <option>MongoDB</option>
                  </select>
              </div><br />
              <button type='submit'>Submit</button>
          </form>
        )
   }
}

export default Form;