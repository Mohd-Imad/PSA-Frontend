import CompB from "./CompB"
function CompA(){
    let a = 100;
    let b = 200;
    return <div>
        <h1>Component A</h1>
        <b>a value : {a}</b><br/>                    {/* reading a variable */}
        <b>b value : {b}</b>
        <hr/>
        <CompB prop1={a} prop2={b}/>                 {/* sending variables as props */}
    </div> 
}

export default CompA