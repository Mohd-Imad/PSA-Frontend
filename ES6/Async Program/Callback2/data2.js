let employees = [{"id":1,"name":"Roze","gender":"Female"},
{"id":2,"name":"Bartel","gender":"Male"},
{"id":3,"name":"Jannelle","gender":"Female"},
{"id":4,"name":"Hiram","gender":"Male"},
{"id":5,"name":"Camala","gender":"Female"}]

let createEmployee = (emp, callback)=>{
    setTimeout(()=>{
        employees.push(emp)
        callback()
    },4000)
}

let getEmployees = ()=>{
    setTimeout(() => {
        let rows = ""
        employees.forEach((employee)=>{ 
            rows = rows+
             `<tr>
                <td>${employee.id}</td>
                <td>${employee.name.toUpperCase()}</td>
                <td>${employee.gender.slice(0,1)}</td>
             </tr>`
        })
        // document.getElementById('tbody_Data').innerHTML = "Good Evening"
        document.getElementById('tbody_Data').innerHTML = rows;
    }, 1000);
}
    createEmployee({id:6, name:"Rahul", gender:"Male"},getEmployees)
    