const bcrypt = require('bcrypt')
let user = {
    name : "Rahul",
    email : "rahul123@gmail.com",
    password : '0987654321',
    cc_No : '4455 6677 8899 1122',
    cvv_No : '123'  
}

//convert all user's sensitive data to hashed format or unreadable format

//using bcrypt JS
let salt = bcrypt.genSaltSync(10);
let newCC_No = bcrypt.hashSync(user.cc_No, salt);
let newPassword = bcrypt.hashSync(user.password, salt)
let newCVV_No = bcrypt.hashSync(user.cvv_No, salt)
/* console.log(user.cc_No)
console.log(newCC_No)
console.log(user.password);
console.log(newPassword)
console.log(user.cvv_No);
console.log(newCVV_No) */


//using spread operator
let new_User = {...user, password:newPassword, cc_No:newCC_No, cvv_No:newCVV_No}
console.log(user);
console.log(new_User);