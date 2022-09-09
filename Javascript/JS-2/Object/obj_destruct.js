// Object Destructuring


const person={    
    name: "ABCD",
    age: 20,
    gender: "Male",
}
 console.log(person);


 //Method-1
/*  const name= person.name;
 const age= person.age;

 console.log(name, age); */

 //Method-2
 const {name, age}= person;
 console.log(name)
 console.log(age)
 