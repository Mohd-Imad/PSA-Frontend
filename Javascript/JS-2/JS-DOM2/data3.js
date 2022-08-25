let employees=[{"id":1,"name":"Bree","gender":"Female","salary":"$1.61"},
{"id":2,"name":"Sandra","gender":"Female","salary":"$5.33"},
{"id":3,"name":"Allen","gender":"Male","salary":"$8.76"},
{"id":4,"name":"Erwin","gender":"Male","salary":"$7.32"},
{"id":5,"name":"Jeffry","gender":"Male","salary":"$0.80"},
{"id":6,"name":"Sarette","gender":"Female","salary":"$5.08"},
{"id":7,"name":"Matelda","gender":"Female","salary":"$7.89"},
{"id":8,"name":"Otho","gender":"Male","salary":"$0.20"},
{"id":9,"name":"Yance","gender":"Male","salary":"$5.98"},
{"id":10,"name":"Isadore","gender":"Agender","salary":"$1.98"},
{"id":11,"name":"Celestyn","gender":"Female","salary":"$8.92"},
{"id":12,"name":"Betsy","gender":"Female","salary":"$8.35"},
{"id":13,"name":"Juli","gender":"Female","salary":"$3.74"},
{"id":14,"name":"Monte","gender":"Male","salary":"$6.02"},
{"id":15,"name":"Cirstoforo","gender":"Male","salary":"$0.20"},
{"id":16,"name":"Arlina","gender":"Female","salary":"$8.53"},
{"id":17,"name":"Merv","gender":"Male","salary":"$7.60"},
{"id":18,"name":"Brennan","gender":"Male","salary":"$7.97"},
{"id":19,"name":"Liva","gender":"Female","salary":"$0.18"},
{"id":20,"name":"Tommie","gender":"Female","salary":"$8.26"},
{"id":21,"name":"Crawford","gender":"Male","salary":"$9.26"},
{"id":22,"name":"Faber","gender":"Male","salary":"$0.17"},
{"id":23,"name":"Hetti","gender":"Female","salary":"$4.83"},
{"id":24,"name":"Shantee","gender":"Female","salary":"$8.01"},
{"id":25,"name":"Aron","gender":"Male","salary":"$1.89"}]


function getEmpDetails() {
    let rows=""

    let i=0;
    while(i<=employees.length-1){ 
        rows= rows+ `<tr>
                         <td>${employees[i].id}</td>
                         <td>${employees[i].name}</td>
                         <td>${employees[i].gender}</td>
                         <td>${employees[i].sal}</td>
                    </tr>`
        i=i++
    }

    document.getElementById('empl_data').innerHTML= rows;
}