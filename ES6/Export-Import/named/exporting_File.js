let tax = 18;                                    //variable
function wish() {                                //function
    console.log("Good Morning");
}
class Example{                                   //class
    a = "Dummy Variable"
    test = ()=>{
        console.log('Testing Dummy Function');
        
    }
}

//default export---for exporting multiple values

//here export tax variable and wish() function

//export default {tax, wish};         // named exporting syntax in ES6
module.exports = {tax, wish};       // named exporting syntax in ES5