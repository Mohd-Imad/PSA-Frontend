import React from 'react';
class MessageClass extends React.Component{
    msg = "Hello";
    gmHandler = ()=>{
        // console.log("Good Morning");
        this.msg = "Good Morning"
        console.log(this.msg);
        this.forceUpdate()
    }
    gnHandler = ()=>{
        // console.log("Good Night");
        this.msg = "Good Night"
        console.log(this.msg);
        this.forceUpdate()
    }
    render(){
        return <div>
            <h1>Message Class Component</h1>
            <h3>Messgae : {this.msg} </h3>
            <button onClick={this.gmHandler}>GM</button>&nbsp;&nbsp;&nbsp;
            <button onClick={this.gnHandler}>GN</button>
        </div>
    }
}

export default MessageClass