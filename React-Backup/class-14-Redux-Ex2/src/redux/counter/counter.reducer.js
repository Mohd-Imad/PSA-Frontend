import { DECR,INCR } from "./counter.action";

let initialState = {
    product_Name : "OnePlus Nord CE2 Lite",
    price : 22000,
    qty : 1
}
let counterReducer = (state = initialState,action)=>{
    //validating action type
    switch(action.type){
        case INCR:
            return {...state,qty: state.qty+1}
        case DECR:
            return {...state,qty: state.qty-1}
        default:
            return state;
    }
}

export {counterReducer}