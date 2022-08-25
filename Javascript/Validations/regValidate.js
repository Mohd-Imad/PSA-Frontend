function form_Validate() {
    let name = document.getElementById('uname').value
    //alert(name)
    if (name == "" && name.length <= 5) {
        document.getElementById('uname_Message').innerHTML = "Please Enter User Name"
        //alert("Pls Enter Name")
    }

    let email = document.getElementById('email').value;
    if (email == "") {
        document.getElementById('email_Message').innerHTML = "Pleae Enter Email Id"
    }

    let mobile = document.getElementById('num').value;
    if (mobile == "") {
        document.getElementById('number_Message').innerHTML = "Pleae Enter valid Mobile number"
    }


    return false
} 

