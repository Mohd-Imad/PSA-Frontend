class Account{
    min_Bal = 1000;                                 //property
    open_Account(){
        console.log("Acc created Successful");      //method-1
    }
    deposit_Amount(){
        console.log("Amount Deposited");            //method-2
    }    
    cash_Withdraw(){ 
        console.log("Cash Withdrawn");              //method-3
    }    
    get_Bal(){
        console.log("40K");                         //method-4
    }    
    get_Stat(){
        console.log("Your Statement");              //method-5
    }    
    close_Account(){
        console.log("Closed Successfully");         //method-6
    }
}

let a1=new Account()                               //creating object
console.log(a1);                                   //accessing object
console.log(a1.min_Bal);                           //accesing class property
a1.open_Account()                                  //accessing class methods
a1.deposit_Amount()
a1.cash_Withdraw()
a1.get_Bal()
a1.get_Stat()
a1.close_Account()