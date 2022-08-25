let employees=[
    {id:101, name:'ABC', sal:45000},
    {id:102, name:'PQR', sal:55000},
    {id:103, name:'XYZ', sal:65000},
]


function getEmployeesData() {
    let rows=""
    for(i=0; i<=employees.length-1; i++){
        rows= rows+ `<tr>
                         <td>${employees[i].id}</td>
                         <td>${employees[i].name}</td>
                         <td>${employees[i].sal}</td>
                    </tr>    `
    }

    document.getElementById('tbody_data').innerHTML= rows;
}