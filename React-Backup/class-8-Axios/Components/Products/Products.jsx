import React, { Component } from 'react'
import Axios from 'axios'

class Products extends Component {
    constructor(props){
        super(props)
        this.state = {
            products_list : {}
        }
    }
    componentDidMount(){
       Axios.get('https://dummyjson.com/products')
       .then((response)=>this.setState({products_list : response.data}))
       .catch((err)=>{}) 
    }
  
    render(){
        return <>
            {
                Object.keys(this.state.products_list).length > 0 ? 
                <>
                    <pre>{JSON.stringify(this.state.products_list)}</pre>
                    <div className="container">
                        <div className="row">
                            {
                                this.state.products_list.products.map((product)=>{
                                   return <div className="col-md-3">
                                        <div className="card">
                                            <div className="card-header">
                                                <img src={product.thumbnail} height="150px" alt="" />
                                            </div>
                                            <div className="card-body">
                                                <ul className='list-group'>
                                                    <li className='list-group-item'>{product.title}</li>
                                                    <li className='list-group-item'>Price : &#36;{product.price}</li>
                                                    <li className='list-group-item'>Ratings : {product.rating}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </> : null
            }
        </>
    }
}
export default Products