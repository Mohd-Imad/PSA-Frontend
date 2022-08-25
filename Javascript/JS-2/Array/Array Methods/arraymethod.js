//Array has many methods, some of them are---push(),pop(),unshift(),shift(),indexOf(),reverse() and etc...




let a=[10,20,30]               //creating an array
console.log(a);                //reading an array
console.log(a.length);         //gives the size or length of an array

a.push(40,50,60)               //adds element at end of an array
console.log(a);
console.log(a.length);

a.pop()                        //removes the last element of an array
console.log(a);
console.log(a.length);

a.unshift(70)                  //adds new element at the start of an array
console.log(a);
console.log(a.length);

a.shift()                     //removes the first element of an array
console.log(a);
console.log(a.length);

let i=a.indexOf(20)          //to know the index value of particular element
console.log(i);

a.reverse()                  //to reverse the elements of array
console.log(a);