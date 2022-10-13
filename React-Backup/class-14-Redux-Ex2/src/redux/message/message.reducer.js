import {GM, GN} from './message.action'

let initialState = {
    msg : "Hello, Guys...!"
}

let messageReducer = (state = initialState, action)=>{
    //validatng action type
    switch (action.type) {
        case GM:
            console.log(action);
            console.log(action.type)
            return {msg : "Hello, Good Morning..!"}
        case GN:
            return {msg : "Hello, Good Night..!"}
        default:
            return state;
    }
}

export {messageReducer}

// What is reducer?
// Reducer is a pure function, it takes 2 parameters---state & action