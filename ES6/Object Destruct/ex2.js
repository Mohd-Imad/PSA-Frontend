store = {
     product : {
    name  : "OnePlus Nord CE2 Lite",
    price : 22000,
    color : "Aqua Blue" 
}
}

console.log(store.product.name);

//Object Destructuring 

let {product} = store;
console.log(product.name, product.color);