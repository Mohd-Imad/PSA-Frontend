import React, { Component } from 'react'

class MessageComponent extends Component {
    state = {
        msg : "Hello"
    }
    gmHandler = ()=>{
        this.setState({msg : "Hello, GM....!"})
    }
  render() {
    return (
      <div>
        <h1>Message : {this.state.msg}</h1>
        <button onClick={this.gmHandler}>GM</button>&nbsp;&nbsp;
        <button onClick={()=>{this.setState({msg : "Hello, GN...!"})}}>GN</button>
      </div>
    )
  }
}

export default MessageComponent