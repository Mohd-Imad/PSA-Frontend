// let numbers = [60,40,20,50,30,10]
let numbers = [400,1200,550,230,600]
console.log(numbers);


let numAsc = numbers.sort((a,b)=>{           //here passing one arrow function as an argument to sort() method
    return a-b                              // for sorting in ascending order                             
})
console.log("After Sorting in Ascending order");
console.log(numAsc);

let numDes = numbers.sort((a,b)=>b-a )        //here passing one arrow function with implicit return as an argument to sort() method  for descending order                                                  
console.log("After Sorting in Descending order");
console.log(numDes);