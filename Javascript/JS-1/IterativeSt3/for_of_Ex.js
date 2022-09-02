// for loop in array

const fruits = ["apple","mango","grapes"];
const fruits2 = [];

for(fruit of fruits){
    fruits2.push(fruit.toUpperCase());                 //for pushing fruits value to fruits2 after converting to uppercase
}
console.log(fruits2);                                  //then printing fruits2
 