
function CompB(props){                              //here props---- argument which is a object containing CompA props

    return <div>
        <h1>Component B</h1>
        <pre>{JSON.stringify(props)}</pre>           {/* pre----tag used to print object in browser, JSON.stringify()---to convert from object to string */}
        <b>a value from CompA : {props.prop1}</b>                 
    </div>
}
export default CompB