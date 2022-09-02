//Array destructuring

const arr = ["value1","value2"];
// let var1 = arr[0]                               //storing array first value ina variable
// let var2 = arr[1]                               //storing array second value ina variable

// console.log('value of var1',var1);
// console.log('value of var2',var2);

//shorcut

let [var1, var2] = arr;
var1 = "value changed";                            //for updating var1 value
console.log('value of var1',var1);
console.log('value of var2',var2);
