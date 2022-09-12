let employees = [{id:101, name:"Rahul", sal:45000},
                {id:102, name:"Sonia", sal:55000}]

let createEmployee = (emp)=>{
    return new Promise((resolve,reject)=>{            // returns Promise object using new keyword, resolve & reject---are the arguments used in promise method
        setTimeout(()=>{
            employees.push(emp)
        },4000)
    });                      
}

let getEmployees = ()=>{
    setTimeout(() => {
        let rows = ""
        employees.forEach((employee)=>{
            rows = rows+ `<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.sal}</td>
                         </tr>`
        })
        // document.getElementById('tbody_Data').innerHTML = "Hello";
        document.getElementById('tbody_Data').innerHTML = rows;
    } , 1000);

}

createEmployee({id:103, name:"Priyanka", sal:65000}).then(()=>{}).catch(()=>{})
getEmployees()