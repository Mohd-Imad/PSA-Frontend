import React from 'react'
import {useState} from 'react'
const Product = () => {
  let [product,setProduct]=  useState({
        name : "OnePlus Nord Ce2 Lite",
        price : 22000,
        qty : 1,
        image : 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/9/x/u/-original-imagg2abzhxjckxu.jpeg?q=70',
    })
  let decrHandler = ()=>{
    setProduct({...product,qty : product.qty-1})
  }
  return (
    <div>
        <h1>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-10">
                        <table className='table table-hover'>
                            <thead className='bg-warning text-black'>
                                <tr>
                                    <td>Name</td>
                                    <td>price</td>
                                    <td>QTY</td>
                                    <td>Total Amount</td>
                                    <td>Image</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td><i className='fa-solid fa-circle-minus' onClick={decrHandler}></i>{product.qty}<i className='fa fa-plus-circle' onClick={()=>{setProduct({...product,qty : product.qty+1})}}></i></td>
                                    <td>{product.price * product.qty}</td>
                                    <td><img src={product.image} width="70px" alt="" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </h1>
    </div>
  )
}

export default Product