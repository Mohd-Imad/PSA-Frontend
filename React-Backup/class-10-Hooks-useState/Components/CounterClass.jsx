import React, { Component } from 'react'

export class CounterClass extends Component {
    state = {
        qty : 0
    }
    decrHandler = ()=>{
        this.setState({qty : this.state.qty-1})
    }
  render() {
    return (
      <div>
        <h1>Counter Class : {this.state.qty}</h1>
        <button onClick={this.decrHandler}>-</button> &nbsp;&nbsp;
        {this.state.qty}&nbsp;&nbsp;
        <button onClick={()=>{this.setState({qty : this.state.qty+1})}}>+</button>
      </div>
    )
  }
}

export default CounterClass