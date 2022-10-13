import React from 'react'
import { incrAction,decrAction } from '../redux/counter/counter.action'
import { useDispatch, useSelector} from 'react-redux'

const Counter = () => {
  let counter = useSelector((state)=>{
    return state.count;                      //count----raji
  })
  let dispatch = useDispatch()
  let decrHandler = ()=>{
    dispatch(decrAction())
  }
  let incrHandler = ()=>{
    dispatch(incrAction())
  }
  return (
    <div>
      <pre>{JSON.stringify(counter.qty)}</pre>
      <h1>Counter Component : {counter.qty}</h1>
      {counter.qty<=0?<button disabled onClick={decrHandler}>DECR</button>:<button onClick={decrHandler}>DECR</button>}
      <button onClick={incrHandler}>INCR</button>
    </div>
  )
}

export default Counter