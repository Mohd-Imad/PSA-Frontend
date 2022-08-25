

let employees = [{ id: 101, name: 'Rahul' },    //Array object
{ id: 102, name: "Sonia" },
{ id: 103, name: "Priyanka" }
]
console.log(employees.length)
for (emp of employees) {
    //console.log(emp)
    console.log(emp.name)
    //console.log(emp.id)
}