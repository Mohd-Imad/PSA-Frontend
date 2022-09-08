//array map()----is a method which iterates array and executes the function and return some elements
//map()----expects function or arrow function as an argument


//passing arrow function as an argument
/* let arr = [1,2,3]
arr.map(()=>{
    console.log('Iterating array and executing func');  
}) */

//passing normal function as an argument
let arr = [1,2,3]
arr.map(function Testing(){
    console.log('Iterating array and executing func');  
})
