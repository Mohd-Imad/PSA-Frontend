import React from 'react'
import { gmAction, gnAction } from '../redux/message/message.action'
import {useDispatch, useSelector} from 'react-redux'

let Message = () => {
  let dispatch = useDispatch()
  let message = useSelector((state)=>{
    return state.msg;                      //msg-----nayana
  })
  let gmHandler = ()=>{
    //dispatch action
    dispatch(gmAction())
  }
  let gnHandler = ()=>{
    dispatch(gnAction())
  }
  return (
    <div>
        <h3>Message : {message.msg}</h3>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
    </div>
  )
}

export default Message