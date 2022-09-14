const products = [{prod_id:01, prod_name:"Mobile", price:18000},
                {prod_id:02, prod_name:"Laptop", price:35000},
                {prod_id:03, prod_name:"TV", price:40000}]

const totalAmount = products.reduce((totalPrice,currentProduct)=>{        
    return totalPrice + currentProduct.price;                        //here returning sum of totalPrice and currentProduct's price
},0)                                                        //here initial price is 0

console.log(totalAmount);

// accumulator   currentValue      returning
// totalPrice    currentPrice      returning sum
//    0             18000           18000
//  18000           35000           53000
//  53000           40000           93000
