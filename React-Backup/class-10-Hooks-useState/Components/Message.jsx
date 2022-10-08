// React Hooks -- In a function component, component's data updation wasn't possible till the react version 16.8, 
// but after that version, data updation is possible using React Hooks concept (useState)
// useState is similar to the class component's setState method
// difference b/w setState & useState -- 1: setState always an object..... but useState can be string, var, array 7 obj also
//                                       2: in setstate auto-merge-option is available.... in useState auto-merge-option is NA

import React from 'react'
import { useState } from 'react'

const Message = () => {
  // let msg = "Hello"
  let [msg, setMsg] = useState("Message before updating")
  //   var,  func
  let firstHandler = ()=>{
    setMsg("React Hooks Test-1")
  }
  return (
    <div>
        <h1>Message : {msg}</h1>
        <button onClick={firstHandler}>msg-1</button>&nbsp;&nbsp;
        <button onClick={()=>{setMsg("React Hooks Test-2")}}>msg-2</button>
    </div>
  )
}

export default Message