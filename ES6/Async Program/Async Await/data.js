let employees = [{id:101, name:"ABC", gender:"Male"},
                {id:102, name:"PQR", gender:"Female"}]

let createEmployee = (emp)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let flag = true;
            employees.push(emp);
            flag ? resolve("Data Inserted") : reject("Not Inserted")
        },4000)
    })
}

let getEmployees = ()=>{
    setTimeout(() => {
        let rows = ""
        employees.forEach((employee) => {
            rows = rows+
                    `<tr>
                        <td>${employee.id}</td>
                        <td>${employee.name}</td>   
                        <td>${employee.gender}</td>
                    </tr>`
        })  

        document.getElementById('tbody_Data').innerHTML = rows


    }, 1000);
}


    let ready = async()=>{                                           //async------method which excutes the functions simultaneously
    await createEmployee({id:103, name:"XYZ", gender:"Female"})     //using await keyword----- by which the functions executing simultaneously waits for a promise to get passed
    getEmployees() 
    }
    ready()
    
    






