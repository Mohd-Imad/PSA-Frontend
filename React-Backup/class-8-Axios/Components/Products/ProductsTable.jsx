import React, { Component } from 'react'
import Axios from 'axios'

class ProductsTable extends Component {
    constructor(props){
        super(props)
        console.log("This is a special method which executes---first")
        this.state = {
            products : {}
        }
    }

    //component lifecycle method
    componentDidMount(){
        console.log("This is a component lifecycle method which excutes---third after render method and loading complete component")
        Axios.get('https://dummyjson.com/products/').then((resp)=>{
            console.log(resp.data)
            this.setState({products : resp.data})
        }).catch((err)=>{
            console.log(err)
        })
    }

  render() {
    console.log("This method returns the UI which executes---second")
    return (
        <>
            {
                Object.keys(this.state.products).length > 0 ?      //to check the given object empty or not
                <>
                <div className="container">
                    <pre>{JSON.stringify(this.state)}</pre>
                    <div className="row">
                        <div className="col-md-8">
                            <table className='table table-stripped'>
                                <thead className='bg-dark text-white'>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {
                                            this.state.products.products.map((product)=>{
                                                return <tr>
                                                    <td>{product.id}</td>
                                                    <td>{product.title}</td>
                                                    <td>{product.description}</td>
                                                    <td><img src={product.thumbnail} width="80px  " alt="" /></td>
                                                </tr>
                                            })
                                        }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </> : null
            }
        </>
    )
  }
}

export default ProductsTable