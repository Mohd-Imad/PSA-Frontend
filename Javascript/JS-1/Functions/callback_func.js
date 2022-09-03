// Callback function

function myFunc1() {                               //creating function
    console.log('This is myFunc1 output');
}

function myFunc2(a) {                              //creating other function with parameter 'a'
    // console.log('This is myFunc2 output');
    console.log(a);                                //printing parameter
    a();                                           //invoking parameter
}
myFunc2(myFunc1)                                   //passing first func as an argument while invoking second func