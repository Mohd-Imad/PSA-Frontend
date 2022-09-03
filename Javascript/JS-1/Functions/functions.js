// We can use 3 methods in function



// 1---Function declaration
function firstChar(string){
    return string[0];
}
const returnedValue = firstChar("Rahul");
console.log(returnedValue);



// 2---function expression
const findTarget = function(array, target) {
    for(i=0; i<array.length; i++){
        if (array[i]===target) {
            return i;
        }
    }
        return -1;
}
 let myArray = [2,4,7,8]
const result = findTarget(myArray, 10)
console.log(result);



// 3---arrow function
const isEven =(num) => {
    return num % 2 === 0;
 }
let res = isEven(6);
console.log(res); 
