//Q. how to access all items from Arrays using for loop in JS?

//Ans. for loop consists 3 statements---initialization, condition, incr/decr

/* initialization---let i=0;
   condition--------i <= a.length -1
   incr/decr--------i++ */

let a=[10,20,30,40]


//how to access all array elements  using for loop?
   for(let i=0; i<=a.length-1; i++){
    console.log(a[i]);
   }