

let employee = {
    id: 101,
    name: "Rahul",
    sal: 45000
}
for (key in employee) {     
    // console.log(key)                           this prints only keys---- id, name, sal       
    console.log(employee[key])                    //this prints key values
} 