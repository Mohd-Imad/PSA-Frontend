import React from "react";
class Login extends React.Component{
    state = {
        email : "",
        password : ""
    }

    emailHandler = (event)=>{               //here event --- an event which is triggered from onChange event
        // console.log(event);              
        console.log(event.target);          //target --- shows the tag referrence
        console.log(event.target.value);    //value --- user input value
        this.setState({email : event.target.value})  
    }
    passwordHandler = (event)=>{
        this.setState({password : event.target.value})
    }
    loginHandler = (event)=>{
        event.preventDefault()                //preventDefault()---a method which prevents the data loss after submiting the form
        console.log(this.state)
    }
    render(){
        return (
        <div>
            <h1>Login Component</h1>
            <pre>{JSON.stringify(this.state)}</pre>           {/* for printing object in browser */}
            <form onSubmit={this.loginHandler}>
                <label>Email : </label>
                <input type = "email" onChange={this.emailHandler} /><br/>
                <label>Password : </label>
                <input type="password" onChange={this.passwordHandler} /><br/>
                <input type="submit" value="Login" />
            </form>
        </div>
        )
    }
}

export default Login