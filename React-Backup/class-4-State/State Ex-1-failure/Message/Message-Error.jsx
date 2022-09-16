function Message(){
    let msg = "Hello"
    let gmHandler = ()=>{
        // console.log("Good Morning");
        msg = "Good Morning";
        console.log(msg);
    }
    let gnHandler = ()=>{
        // console.log("Good Night");
        msg = "Good Night";
        console.log(msg);
    }
    return <div>
        <h1>Message Component</h1>
        <h3>Message : {msg} </h3>
        <button onClick={gmHandler}>GM</button>&nbsp;&nbsp;&nbsp;
        <button onClick={gnHandler}>GN</button>
    </div>
}

export default Message