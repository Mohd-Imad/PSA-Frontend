import {INCR, DECR} from './counter.action'

let initialState = {
    qty : 1
}
let counterReducer = (state = initialState, action)=>{
    switch(action.type){
        case INCR:
            return {qty : state.qty+1}
        case DECR:
            return {qty : state.qty-1}
        default:
            return state;
    }
}

export {counterReducer}