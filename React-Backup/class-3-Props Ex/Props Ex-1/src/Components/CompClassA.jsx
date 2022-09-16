import React from "react"
import CompClassB from "./CompClassB"
class CompClassA extends React.Component{
    ename = "Rahul";
    email = "rahul123@gmail.com"
    render(){
        return <div>
            <h1>Claas Component A</h1>
            <span><b>Employee Name : </b>{this.ename}</span><br/>
            <span><b>Employee Email : </b>{this.email}</span>
            <hr/>
            <CompClassB prop1={this.ename} prop2={this.email}/>             {/* sending variable as props */}
        </div>
    }
}

export default CompClassA