// using one event handler for all inputs

import React, { Component } from 'react'

class Register extends Component {
    state = {
        name : "",
        email : "",
        mobile : "",
        gender : "",
        DOB : "",
    }
    inputHandler = (event)=>{
        this.setState({
            [event.target.name]  : event.target.value
        })
    }
    RegisterHandler = (event)=>{
        event.preventDefault()
        console.log(this.state);
    }  
  render() {
    return (
      <div>
        <div className="container mt-3">
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-dark text-white">
                            <h3>Registration Details</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.RegisterHandler}>
                                <div className="form-group">
                                    <input type="text" className='form-control'name="name" onChange={this.inputHandler} placeholder='Name' />
                                </div>
                                <div className="form-group">
                                    <input type="email" className='form-control' name='email' onChange={this.inputHandler} placeholder='Email ID' />
                                </div>
                                <div className="form-group">
                                    <input type="number" className='form-control' name='mobile' onChange={this.inputHandler} placeholder='Mobile' />
                                </div>
                                <div className="form-group">
                                    <input type="date" className='form-control' name='DOB' onChange={this.inputHandler} placeholder='Date of Birth' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor='gender'>Gender : <br /> 
                                    Male<input type="radio" className='form-control form-control-sm' onChange={this.inputHandler} name='gender' />
                                    Female<input type="radio" className='form-control form-control-sm' onChange={this.inputHandler} name='gender' /></label>
                                </div>
                                <input type="submit" className='btn btn-warning' value="Register" />
                            </form>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
      </div>
    )
  }
}

export default Register