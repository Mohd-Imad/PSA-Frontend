import React from "react"
import CompClassB from "./CompClassB"
class CompClassA extends React.Component{
    vName = "ABCD";
    arr = [1,2,3,4,5];
    obj = {
        id : 101,
        age : 21
    }
    empDetails = (a)=>{
        console.log("Employee Details",a);
    }
    render(){
        return <div>
            <h1>Class Component A</h1>
            <span><b>Variable Name : </b>{this.vName}</span><br/>
            <span><b>Array value : </b>{this.arr}</span><br/>
            <span><b>Object value : </b>{this.obj.id}</span><br/>
            <span><b>Method : </b>{this.empDetails}</span>
            <hr/>
            <CompClassB 
            prop1={this.vName}           /* sending variable as props */
            prop2={this.arr}             /* sending array as props */
            prop3={this.obj}             /* sending object as props */
            prop4={this.empDetails}      /* sending method as props */
            />                            
        </div>
    }
}

export default CompClassA