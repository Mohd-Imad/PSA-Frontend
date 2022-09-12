let employees = [{id:101, name:"Rahul", sal:45000},
                {id:102, name:"Sonia", sal:55000}]

let createEmployee = (emp)=>{
    return new Promise((resolve,reject)=>{            // returns Promise object using new keyword, resolve & reject---are the arguments used in promise method
        setTimeout(()=>{
            employees.push(emp)
        },4000)
    });                      
}

createEmployee({id:103, name:"Priyanka", sal:65000}).then(()=>{}).catch(()=>{})