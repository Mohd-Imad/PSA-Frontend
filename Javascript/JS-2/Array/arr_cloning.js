// array cloning or copying using spread operator (...)

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

let myNewArray = [...arr1, ...arr2, 7, 8];                        //here ... is a spread operator used for cloning
console.log(myNewArray);


//spread operator Ex-2

let arrEx= [..."abc"]             //here spread operator ll spread all 3 letters seperately
console.log(arrEx);