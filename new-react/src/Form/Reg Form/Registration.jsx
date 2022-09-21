import React, { Component } from 'react'

class Registration extends Component {
    state = {
        name : "",
        email : "",
        mobile : "",
        gender : "",
        DOB : "",
    }
    nameHandler = (event1)=>{  
        // console.log(event1.target.value);
        this.setState({name : event1.target.value })
      }
    emailHandler = (event2)=>{  
        this.setState({email : event2.target.value})
      }
    mobileHandler = (event3)=>{ 
        this.setState({mobile : event3.target.value})
       }
    dobHandler = (event4)=>{  
        this.setState({DOB : event4.target.value})
      }
    genderHandler = (event5)=>{  
        this.setState({gender : event5.target.value})
      }
    RegisterHandler = (event)=>{
        event.preventDefault()
        console.log(this.state);
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
            <input type="text" onChange={this.emailHandler}  /><br />
            <label>Mobile : </label>
            <input type="text" onChange={this.mobileHandler}  /><br />
            <label>DOB : </label>
            <input type="date" onChange={this.dobHandler}  /><br />  
            <input type="radio" onChange={this.genderHandler} name='opt'/>Male  
            <input type="radio" onChange={this.genderHandler} name='opt'/>Female <br />  
            <input type="submit" value="Register" />
        </form>
      </div>
    )
  }
}

export default Registration