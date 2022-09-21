import React, { Component } from 'react'

class Register extends Component {
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
                                    <input type="text" className='form-control' onChange={this.nameHandler} placeholder='Name' />
                                </div>
                                <div className="form-group">
                                    <input type="text" className='form-control' onChange={this.emailHandler} placeholder='Email ID' />
                                </div>
                                <div className="form-group">
                                    <input type="text" className='form-control' onChange={this.mobileHandler} placeholder='Mobile' />
                                </div>
                                <div className="form-group">
                                    <input type="text" className='form-control' onChange={this.dobHandler} placeholder='Date of Birth' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor='option'>Gender : <br /> 
                                    Male<input type="radio" className='form-control form-control-sm' onChange={this.genderHandler} name='option' />
                                    Female<input type="radio" className='form-control form-control-sm' onChange={this.genderHandler} name='option' /></label>
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