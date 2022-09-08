let Sizes = [37, 39, 41, 43]

//construct a new array based on existing array and increment the size by 1 and print the new sizes
let new_Sizes = []

//------------------1---------------using for loop
/* for(let i=0; i<Sizes.length; i++){
    new_Sizes.push(Sizes[i]+1)
}
console.log(Sizes);
console.log(new_Sizes); */

//------------------2--------------using while loop
/* let i=0;
while(i<Sizes.length){
    new_Sizes.push(Sizes[i]+1)
    i++;
}
console.log(Sizes);
console.log(new_Sizes); */

//------------------3--------------using do while loop
/* let i=0;
do {
    new_Sizes.push(Sizes[i]+1)
    i=i+1;
} while (i<Sizes.length); 
console.log(Sizes);
console.log(new_Sizes); */


//-------------------4--------------using for of loop
for(Size of Sizes){
    new_Sizes.push(Size+1) 
}

console.log(Sizes);
console.log(new_Sizes);