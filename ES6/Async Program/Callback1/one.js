let calc = (a,b,operator) => {
    if(operator == "sum"){
        return a+b;
    }
    if(operator == "multiply"){
        return a*b;
    }
}

let r1 = calc(10,20,"sum")              //passing arguments---numbers and string
let r2 = calc(10,20,"multiply")
console.log(r1);
console.log(r2);
