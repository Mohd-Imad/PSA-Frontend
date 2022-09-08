let a = [10,20,30]
let b = [40,50,60]
let c = [...a, ...b]              // merging 2 arrays using spread operator
let d = [...a, ...b, 70,40,10]    // expanding array elements 

console.log(a);
console.log(b);
console.log(c);
console.log(d);