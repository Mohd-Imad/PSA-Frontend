let employees = [{id:101, name:"Rahul", sal:45000},
                {id:102, name:"Sonia", sal:55000}]

let createEmployee = (emp)=>{
    return new Promise((resolve,reject)=>{            // returns Promise object using new keyword, resolve & reject---are the arguments used in promise method
        setTimeout(()=>{
            let flag = true;
            employees.push(emp)
            flag ? resolve("Inserted Data Successfully"): reject("Not Inserted")   //resolve & reject --- success & failure
        },4000)
    });                      
}

let getEmployees = ()=>{
    setTimeout(() => {
        let rows = ""
        employees.forEach((employee)=>{
            rows = rows+ `<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name.toUpperCase()}</td>
                            <td>${employee.sal}</td>
                         </tr>`
        })
        // document.getElementById('tbody_Data').innerHTML = "Hello";
        document.getElementById('tbody_Data').innerHTML = rows;
    } , 1000);

}

createEmployee({id:103, name:"Priyanka", sal:65000})
.then((msg)=>{
    getEmployees()
    console.log(msg);
    
})
.catch((err)=>{
    console.log(err);
    
})