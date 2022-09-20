import React from "react";
class Message extends React.Component{
    state = {
        msg : "Hello.....!"
    }

    updateHandler = (value)=>{                   /* value---a binded value */
        this.setState({
            msg : value
        })
    }
    render(){
        return (<div>
            <h1>Message Class Component</h1>
            <h3>Message : {this.state.msg} </h3>
            <button onClick={this.updateHandler.bind(this,"Good Morning")}>GM</button>&nbsp;   {/* bind()---a method which initiate value to updateHandler() as value */}
            <button onClick={this.updateHandler.bind(this,"Good Afternoon")}>GA</button>&nbsp;
            <button onMouseOver={this.updateHandler.bind(this,"Good Evening")}>GE</button>&nbsp;
            <button onMouseOver={this.updateHandler.bind(this,"Good Night")}>GN</button>&nbsp;
        </div>)
    }
}

export default Message