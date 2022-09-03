// Function returning function


function myFunc(){                      //creating func
    function hello() {                  //creating other func inside that func
        console.log("Hello world");
    }
    return hello;                       //returning second function
}

const res = myFunc();                   //storing returned value in a variable
console.log(res);                       //printing variable 
res();                                  //invoking that variable which holds the function hello




