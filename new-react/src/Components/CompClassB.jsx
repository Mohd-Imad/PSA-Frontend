import React from "react"
import CompClassA from "./CompClassA"
class CompClassB extends React.Component{                       

    render(){
        return <div>
            <h1>Class Component B</h1>        
            <pre>{JSON.stringify(this.props.prop2)}</pre>       {/* pre----tag used to print object in browser, JSON.stringify()---to convert from object to string */}
        </div>                                                   /* props----an object which contains CompClassA props */
    } 
}

export default CompClassB