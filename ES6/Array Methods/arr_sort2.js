const products = [{prod_id:01, prod_name:"prod1", price:1800},
                {prod_id:02, prod_name:"prod2", price:400},
                {prod_id:03, prod_name:"prod3", price:3500},
                {prod_id:04, prod_name:"prod4", price:250},
                {prod_id:05, prod_name:"prod5", price:1300}]

// Price lowToHigh
const lowToHigh = products.sort((a,b)=>{                
    return a.price - b.price                                  //a.price--first product's price    b.price--second object's price
})
// console.log(products);
console.log(lowToHigh);

// Price highToLow
const highToLow = products.slice(0).sort((a,b)=>b.price - a.price)    
// console.log(products);
console.log(highToLow);