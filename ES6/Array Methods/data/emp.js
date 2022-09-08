let employees = [{"id":1,"name":"Jeffie","age":14},
{"id":2,"name":"Celestyna","age":79},
{"id":3,"name":"Loree","age":97},
{"id":4,"name":"Clemence","age":28},
{"id":5,"name":"Josephina","age":73},
{"id":6,"name":"Kimmie","age":29},
{"id":7,"name":"Julius","age":84},
{"id":8,"name":"Maybelle","age":28},
{"id":9,"name":"Raleigh","age":29},
{"id":10,"name":"Talbert","age":84}]    

function display_EmpData() {
    let rows = ""
    employees.forEach((employee)=>{
        rows = rows +
        `<tr>
            <td>${employee.id}</td>
            <td>${employee.name.toUpperCase()}</td>
            <td>${employee.age}</td>
        </tr>`
    })

// document.getElementById('tbody_Data').innerHTML = "Good Evening";
document.getElementById('tbody_Data').innerHTML = rows;
}