let employees=[
    {id:101, name:'ABC', sal:45000},
    {id:102, name:'PQR', sal:55000},
    {id:103, name:'XYZ', sal:65000},
]


function getEmpDetails() {
    let rows=""
    for(emp of employees){
        rows= rows+ `<tr>                                     //``---back tick 
                         <td>${emp.id}</td>                   //${}-----string literal
                         <td>${emp.name}</td>
                         <td>${emp.sal}</td>
                    </tr>    `
    }

    document.getElementById('empl_data').innerHTML= rows;
}