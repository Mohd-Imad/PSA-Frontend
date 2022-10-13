//action type
const GM = "GM"
const GN = "GN"

//action
let gmAction = ()=>{
    console.log("GM action");
    return {type:GM}
}

let gnAction = ()=>{
    console.log("GN action");
    return {type:GN}
}

export {gmAction, gnAction , GM, GN}


// What is action?
// Action is a funtion, it returns actionable object