import React from 'react'
import { incrAction,decrAction } from '../redux/counter/counter.action'
import { useDispatch, useSelector} from 'react-redux'

const CounterTable = () => {
  let counter = useSelector((state)=>{
    return state;
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
      <pre>{JSON.stringify(counter)}</pre>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <table className="table table-hover">
              <thead className="bg-dark text-white">
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>QTY</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{counter.product_Name}</td>
                  <td>{counter.price}</td>
                  <td><i className='fa fa-minus-circle' onClick={decrHandler}></i>{counter.qty}<i className='fa fa-plus-circle' onClick={incrHandler}></i></td>
                  <td>{counter.qty * counter.price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CounterTable