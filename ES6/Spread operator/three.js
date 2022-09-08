let emp = {id:101, name:"Rahul", email:"rahul@gmail.com"}
let details = {email:"rahul@ibm.com", sal:45000}              //here email property is repeating so this ll override
let emp_Details = {...emp, ...details}                        //so after merging objects with repeated property, then the second property only ll be printed
console.log(emp);
console.log(details);
console.log(emp_Details);