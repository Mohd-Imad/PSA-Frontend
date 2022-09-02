// Difference between Primitive DT and Non-Primitive(Reference) DT


//Primitive DT
let num1 = 6;
let num2 = num1;
console.log('Primitive DT');
console.log("value of num1 is",num1);
console.log("value of num2 is",num2);
num1++;                                              //incrementing num1 value  i.e. from 6 to 7
console.log('after incrementing num1 value');
console.log("value of num1 is",num1);                //here the o/p ll be 7
console.log("value of num2 is",num2);                //but here o/p ll be 6 itself

 // because primitive DT stores variables in stack , each variable ll get particular memory in stack
 // so even after changing one variable value, it won't disturb the other variable in stack
//-------------------------------------------------------------------------------------------------------------------------------------------------
 

//Non-Primitive DT
 let array1 = ["item1","item2"];
 let array2 = array1;
console.log('Non-Primitive DT');
 console.log("array1",array1);
 console.log("array2",array2);
array1.push("item3");                                  //pushing 1 item to array1
console.log('after pushing one more item to array1');  
console.log("array1",array1);
console.log("array2",array2);

//here as soon as we push one item in array1, the same thing ll reflect in array2
/*because non primitive DT contains the pointers in the stack which holds the address of array,  
  so if one array changes automatically the second array changes*/