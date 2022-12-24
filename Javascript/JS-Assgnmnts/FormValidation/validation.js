
let validation = (event)=>{
      event.preventDefault(s)
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let mobile = document.getElementById('mobile').value
    let password = document.getElementById('password').value
    let nameMsg = document.getElementById('nameMsg')
    let emailMsg = document.getElementById('emailMsg')
    let mobileMsg = document.getElementById('mobileMsg')
    let passMsg = document.getElementById('passMsg')

    //nameValidation
    if(name===""){
        nameMsg.innerHTML = "Please Enter your Name"
    }
    else if(name.length<4){
        nameMsg.innerHTML = "Name should be of atleast 4 characters"
    }
    else if(name.length>10){
        nameMsg.innerHTML = "Name shouldn't exceed 10 charcters"
    }
    else{
        nameMsg.innerHTML = ""
    }

    //emailValidation
    if(email===""){
        emailMsg.innerHTML = "Please Enter your Email ID"
    }
    else if (!isEmailValid(email)) {
        emailMsg.innerHTML = "Enter a Valid Email"
    }
    else{
        emailMsg.innerHTML = ""
    }


    //mobileValidation
    if(mobile===""){
        mobileMsg.innerHTML = "Please Enter Mobile Number"
    }
    else if(mobile.length<10 || mobile.length>10){
        mobileMsg.innerHTML = "Enter a Valid Mobile Number"
    }
    else{
        mobileMsg.innerHTML = ""
    }

    //passwordValidation
    if(password===""){
        passMsg.innerHTML = "Please Enter Password"
    }
    else if(password.length<6){
        passMsg.innerHTML = "Password should be atleast 6 characters"
    }
    else if(password.length>8){
        passMsg.innerHTML = "Password shouldn't exceed 8 characters"
    }
    else{
        passMsg.innerHTML = ""
    }
}

const isEmailValid = (email) => {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
};
