import React from "react";
import {useState, useEffect} from 'react'
import Axios from 'axios'

let Products = ()=>{
    let [product, setProduct] = useState({})
    let [productArray, setProductArray] = useState([])

    useEffect(()=>{
        Axios.get('https://dummyjson.com/products')
        .then((resp)=>{
            setProduct({product : resp.data})
            setProductArray(product.product.products)
        })
        .catch((err)=>{})
    },[])
    return (
    <div>
        <div className="container">
            <pre>{JSON.stringify(product)}</pre>
            <pre>{JSON.stringify(productArray)}</pre>
            <div className="row">
                <div className="col-md-6">
                    <table className="table table-hover">
                        <thead className="bg-danger text-white">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productArray.length > 0 ? 
                                <>
                                    {
                                        productArray.map((product)=>{
                                            return <tr>
                                                <td>{product.id}</td>
                                                <td>{product.title}</td>
                                                <td>{product.description}</td>
                                                <td>&#36;{product.price}</td>
                                            </tr>
                                        })
                                    }
                                </> : null
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>)
}
export default Products