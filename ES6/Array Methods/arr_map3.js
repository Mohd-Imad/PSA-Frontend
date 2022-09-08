let employees = [{id:101, name:"ABCD", sal:45000},
                {id:102, name:"PQRS", sal:55000},
                {id:103, name:"WXYZ", sal:65000}]

let eNames = employees.map((employee)=>{
            return employee.name;   
    })
    console.log(eNames);
    