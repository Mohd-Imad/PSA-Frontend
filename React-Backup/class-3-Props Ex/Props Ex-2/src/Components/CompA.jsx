import CompB from "./CompB"
function CompA(){
    let vName = "ABCD";
    let arr = [1,2,3,4,5]
    let obj = {
        id:101, 
        age:21,
    }
    let empDetails = (a)=>{
        console.log("Employee Details",a);
    }
    return <div>
        <h1>Component A</h1>
        <b>Variable : {vName}</b><br/>                 {/* reading component data*/}
        <b>Array : {arr}</b><br/>
        <b>Object : {obj.id}</b><br/>
        <b>Method : {empDetails()}</b><br/>
        <hr/>
        <CompB 
            prop1 = {vName}                             /* sending variable as prop */
            prop2 = {arr}                               /* sending array as prop */
            prop3 = {obj}                               /* sending object as prop */
            prop4 = {empDetails}                        /* sending method as prop */
        />
    </div>
}

export default CompA