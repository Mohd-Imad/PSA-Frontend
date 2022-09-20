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
                ...this.state.product,
                qty : this.state.product.qty-1
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
        return <div>
            <h1>Product Class Component</h1>
            <h3>Name : {this.state.product.product_Name} </h3>
            <h3>Name : {this.state.product.price} </h3>
            <img src={this.state.product.image}/>
            <i className="fa fa-2xl fa-circle-minus" onClick={this.decrHandler}></i>&nbsp;{this.state.product.qty}&nbsp;
            <i className="fa fa-2xl fa-circle-plus" onClick={this.incrHandler}></i>
            <h4>Total Amount : {this.state.product.qty * this.state.product.price} </h4>
        </div>
    }
}

export default Product