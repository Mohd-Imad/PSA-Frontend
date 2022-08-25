class Employee{
    e_id = 101;                            //property---nothing but a variable inside a class
    getEmpDetails(){                       //method-----nothing but a function inside a class
        return "Displaying all details"
    }    
}

let e1 = new Employee();                   //creating objects
let e2 = new Employee();
console.log(e1.e_id);                      //accessing class property
console.log(e1.getEmpDetails());           //accessing class method

