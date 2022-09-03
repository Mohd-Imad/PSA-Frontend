// Function inside function

function parentFunc() {                               //creating parent func  using---func dec
    const subFunc1 = function() {                     // inside func creating one more func using---func exp
        console.log("This is sub function-1");
    }
    let subFunc2 = () =>{                             // inside func creating one more func using---arrow func
        console.log("This is sub function-2");
    }
    var subFunc3 = () =>{
        console.log('This is sub function-3');
        
    }
    console.log('This is parent function');           
    subFunc1();                                       //invoking sub func inside main func
    subFunc2()
    subFunc3()
    subFunc1()
}

parentFunc();                                         //invkoing main func