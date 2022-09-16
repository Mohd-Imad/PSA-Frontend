function CompB(props){

    return <div>
        <h1>Component B</h1>
        <pre>{JSON.stringify(props)}</pre>
        <h4>Variable : {props.prop1}</h4>
        <h4>Array : {props.prop2[2]} </h4>
        <h4>Object : {props.prop3.id} </h4>
        <h4>Method : {props.prop4()} </h4>
        <h4>Method : {props.prop4(5)} </h4>
        <h4>Method : {props.prop4(10)} </h4>
    </div>
}

export default CompB