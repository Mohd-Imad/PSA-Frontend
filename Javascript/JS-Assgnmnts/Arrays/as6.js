//Q. how to access Array of Objects item in JS?

//Ans. Array of objects item can be accessed by using array name with object property.  i.e,(arr.object-property),  Ex:(arr.id)

//Ex:
let employees = [{ id: 101, name: 'Rahul' },         // creating Array of Objects       //here, employees---array nanme, id & name----object properties
{ id: 102, name: "Sonia" },
{ id: 103, name: "Priyanka" }]
console.log(employees);                              //reading Array of Objects
console.log(employees.length)                        //arr.length  

for (emp of employees) {                             //emp------temporary variable
   // console.log(emp)                               //for accessing complete array of objects
    console.log(emp.name)                            //for accessing name property
    console.log(emp.id)
}