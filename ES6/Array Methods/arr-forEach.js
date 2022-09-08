//array.forEach------is a method which iterates array and executes function, but can't return any element
//this method is used when we don't want to return anything

let employees = [{id:101, name:"ABCD", sal:45000},
                {id:102, name:"PQRS", sal:55000},
                {id:103, name:"WXYZ", sal:65000}]

let eNames = employees.forEach((employee)=>{
            return employee.name;
    })

    console.log(employees);
    console.log(eNames);           //here this ll return undefined
    