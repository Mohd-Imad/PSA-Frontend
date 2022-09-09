// Example of callback function

let sum = (a,b)=>{                      
    return a+b;
}

let multiply = (a,b)=>{
    return a*b;
}

let calc = (a,b,callback)=>{           
    return callback(a,b)
}
let r1 = calc(10,20,sum)                  //here passing arguments as numbers and function
let r2 = calc(10,20,multiply)
console.log(r1);
console.log(r2);