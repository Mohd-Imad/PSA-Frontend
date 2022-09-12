let goToMovie = (success, failure) => {
    let amount = 400;
    if(amount >500){
        success("Go To Movie....!")
    }
    else{
        failure("Go To Home....")
    }
}


goToMovie((msg)=>{
    console.log(msg);

},(err)=>{
    console.log(err);    
})