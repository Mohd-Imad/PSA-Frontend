//for in loop in array

const fruits = ["apple","mango","grapes"];
const fruits2 = [];

for(index in fruits){
    fruits2.push(fruits[index].toUpperCase());           //for pushing fruits value to fruits2 after converting to uppercase
}

console.log(fruits2);                                    //then printing fruits2