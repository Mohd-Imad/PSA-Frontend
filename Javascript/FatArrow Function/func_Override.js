//Function over riding or hoisting conflict

function wish() {
    console.log("Good Morning");
}

wish()

function wish() {
    console.log("Good Night");
}
wish()
           
//here, the second function is invoked twice because both the functions has same name.......this is called function overriding conflict