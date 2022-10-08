import React, { useState } from 'react'

const Counter = () => {
  let [qty,setQty] = useState(0)
  let decrHandler = ()=>{
    setQty(qty-1)
  }
  return (
    <div>
        <h1>Counter : {qty}</h1>
        <button onClick={decrHandler}>-</button>&nbsp;&nbsp;
        {qty}&nbsp;&nbsp;
        <button onClick={()=>{setQty(qty+1)}}>+</button>
    </div>
  )
}

export default Counter