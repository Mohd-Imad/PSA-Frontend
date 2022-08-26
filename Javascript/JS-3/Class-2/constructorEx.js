//What is Constructor?

//Constructor is  a special method to execute automatically at the time object creation. Purpose---To initialize object values


class Emp{                                              //class
    eId;                                                //property
    eName;
    eSal;
    constructor(id, name ,sal){                        //constructor with parameters....here id, name , sal are parameters
        this.eId= id;                                  //referring to current class property using this pointer
        this.eName= name;
        this.eSal= sal;
    }
    getEmp_Details(){                                  //normal method
        console.log("Displaying Employee Details");
    }
}
let e1=new Emp(101,'Rahul Gandhi',45000)               //initializing values to object by passing arguments
let e2=new Emp(102,'Sonia Gandhi',55000)               //Constructor method executes only once, we cant invoke constructor method explicity
console.log(e1); 
console.log(e2);

e1.getEmp_Details()                                    //normal method can be invoked 'n' number of times
e1.getEmp_Details()
e1.getEmp_Details()
e2.getEmp_Details()
e2.getEmp_Details()
e2.getEmp_Details()