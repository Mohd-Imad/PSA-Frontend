import React from "react"
class CompClassB extends React.Component{                       

    render(){
        return <div>
            <h1>Class Component B</h1>        
            <pre>{JSON.stringify(this.props)}</pre>       {/* pre----tag used to print object in browser, JSON.stringify()---to convert from object to string */}
            <h5>Variable Name : {this.props.prop1} </h5>                  {/*  props----an object which contains CompClassA props  */}
            <h5>Array value : {this.props.prop2[3]} </h5>
            <h5>Object value : {this.props.prop3.age} </h5>
            <h5>Method  : {this.props.prop4()} </h5>
            <h5>Method  : {this.props.prop4(5)} </h5>
        </div>                                                   
    } 
}

export default CompClassB