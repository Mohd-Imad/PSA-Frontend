import React from 'react'
import {decrAction, incrAction} from '../redux/counter/counter.action'
import {useDispatch, useSelector} from 'react-redux'

const Counter = () => {
  let dispatch = useDispatch() 
  let counter = useSelector((state)=>{
    return state;
  }) 
  let decrHandler = ()=>{
    //dispatch action
    dispatch(decrAction())
  }  
  let incrHandler = ()=>{
    dispatch(incrAction())
  }  
  return (
    <div>
        <h1>QTY : {counter} </h1>
        <button onClick={decrHandler}>Decr</button>
        <button onClick={incrHandler}>Incr</button>
    </div>
  )
}

export default Counter