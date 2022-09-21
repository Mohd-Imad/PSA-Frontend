// using Different event handlers for different inputs

import React, { Component } from 'react'

class Registration extends Component {
    state = {
        name : "",
        email : "",
        mobile : "",
        gender : "",
        DOB : "",
    }
    nameHandler = (event)=>{
      this.setState({name : event.target.value })
    }
    emailHandler = (event)=>{
      this.setState({email : event.target.value })
    }
    mobileHandler = (event)=>{
      this.setState({mobile : event.target.value })
    }
    dobHandler = (event)=>{
      this.setState({DOB : event.target.value })
    }
    genderHandler = (event)=>{
      this.setState({gender : event.target.value })
    }
    RegisterHandler = (event)=>{
      event.preventdefault();
      console.log(this.state)
    }
  render() {
    return (
      <div>
        <h1>Registration Form Component</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.RegisterHandler}>
            <label>Name : </label>
            <input type="text" onChange={this.nameHandler} /><br />
            <label>Email ID : </label>
            <input type="email" onChange={this.emailHandler}   /><br />
            <label>Mobile : </label>
            <input type="number" onChange={this.mobileHandler}   /><br />
            <label>DOB : </label>
            <input type="date" onChange={this.dobHandler} /><br />  
            <input type="radio" onChange={this.genderHandler}  name='opt'/>Male  
            <input type="radio" onChange={this.genderHandler}  name='opt'/>Female <br />  
            <input type="submit" value="Register" />
        </form>
      </div>
    )
  }
}

export default Registration