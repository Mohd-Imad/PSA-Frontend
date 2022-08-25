
//Creating object
let employee = {
    id: 101,
    name: "Rahul",
    sal: 45000
}

//Reading object
console.log(employee)

//Updating 
employee.sal = 55000
employee.loc = "Wayanad"        //this will add new loc property 
employee.name = "Rahul Gandhi"

//Deleting
delete employee.id
console.log(employee)


console.log(employee.name)      //for printing particular property
