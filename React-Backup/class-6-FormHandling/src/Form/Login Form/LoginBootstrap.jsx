import React from "react";
class LoginBootstrap extends React.Component{
    state = {
        email : "",
        password : ""
    }
    emailHandler = (event)=>{
        this.setState({email : event.target.value})
    }
    passwordHandler = (event)=>{
        this.setState({password : event.target.value})
    }
    loginHandler = (event)=>{
        event.preventDefault()
        console.log(this.state)
    }
    render(){
        return (
            <div>
                <div className="container mt-3">
                    <pre>{JSON.stringify(this.state)}</pre>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <h3>Login Details</h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.loginHandler}>
                                        <div className="form-group">
                                            <input type="email" className="form-control" onChange={this.emailHandler} placeholder="Email ID" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" onChange={this.passwordHandler} placeholder="Password" />
                                        </div>
                                            <input type="submit" className="btn btn-warning" value="Login" />
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

export default LoginBootstrap