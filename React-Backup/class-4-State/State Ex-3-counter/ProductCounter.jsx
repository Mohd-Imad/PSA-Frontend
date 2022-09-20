import React from "react";
class ProductCounter extends React.Component{
    // qty = 1;                                     //this is normal class component property
    state = {                                    
        qty : 1                                     //this is state object property   
    }
    decrHandler = ()=>{
        this.setState({qty: this.state.qty-1})
    }
    incrHandler = ()=>{
        this.setState({qty: this.state.qty+1})
    }
    render(){
        return <div>
            <h1>Product Counter Class Component</h1>
            <h3>Product QTY : {this.state.qty}</h3>
            <button onClick={this.decrHandler}>-</button>&nbsp;{this.state.qty}&nbsp;&nbsp;
            <button onClick={this.incrHandler}>+</button>
        </div>
    }
}

export default ProductCounter