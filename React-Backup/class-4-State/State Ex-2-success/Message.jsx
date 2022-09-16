import React from "react";
class Message extends React.Component{
    // msg = "Hello"                        //this is normal class property
    state = {
        msg  :"Hello"                       //thi is state object property
    }
    gmHandler = ()=>{
        this.setState({msg: "Good Morning......"})  /* setState()----a method to change the state */
    }
    gnHandler = ()=>{
        this.setState({msg: "Good Night......"})
    }
    render(){ 
        return <div>
            <h1>Message Component</h1>
            <h3>Message : {this.state.msg} </h3>                             {/* reading state object's property */}
            <button onClick={this.gmHandler}>GM</button>&nbsp;&nbsp;&nbsp;
            <button onClick={this.gnHandler}>GN</button>
        </div>
    }
}

export default Message