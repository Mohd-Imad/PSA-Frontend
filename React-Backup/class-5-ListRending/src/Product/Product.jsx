import React from "react";
class Product extends React.Component{
    state = {
        product : {
            product_Name : "OnePlus Nord CE 2 Lite 5G",
            price : 22000,
            image : "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/9/x/u/-original-imagg2abzhxjckxu.jpeg?q=70",
            qty  : 1
        }
    }

    decrHandler = ()=>{
        this.setState({
           product:{
                ...this.state.product,                            /* for copying object's property */
                qty : this.state.product.qty-1                     /* updating qty value  */
            }
        })
    }
    incrHandler = ()=>{
        this.setState({
            product : {
                ...this.state.product,
                qty : this.state.product.qty+1
            }
        })
    }


    render(){
        return <div className="container mt-5">
            <div className="row">
                <div className="col-md-10">
                    <table className="table table-hover">
                        <thead className="bg-dark text-white">
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Product Image</th>
                            <th>Product QTY</th>
                            <th>Total Amount</th>
                        </thead>
                        <tbody>
                            <td>{this.state.product.product_Name}</td>
                            <td>{this.state.product.price}</td>
                            <td><img src={this.state.product.image} height="100px"/></td>
                            <td><i className="fa fa-circle-minus fa-xl" onClick={this.decrHandler}></i>&nbsp;{this.state.product.qty}&nbsp;<i className="fa fa-circle-plus fa-xl" onClick={this.incrHandler}></i></td>
                            <td>{this.state.product.qty * this.state.product.price}</td>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
}

export default Product