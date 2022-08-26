class Employee{                        //creating class
        eid;                           //property
        ename;
        setEid(id){                    //method
            this.eid=id;               //this(keyword)---a pointer pointing/referring to current object/class property
        }
        getEid(){
            return this.eid;
        }
        setEname(name){
            this.ename=name;
        }
        getEname(){
            return this.ename;
        }
}
let e1=new Employee()                 // creating object
e1.setEid(101);                       //accessing method    101---arguments
e1.setEname("Rahul")
console.log(e1);
console.log(e1.getEid());
console.log(e1.getEname());

let e2 = new Employee()
e2.setEid(102)
e2.setEname("Sonia")
console.log(e2)
console.log(e2.getEid())
console.log(e2.getEname())