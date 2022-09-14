// reduce ()

const numbers = [1,2,3,4,5,10]

// const sum = numbers.reduce((a,b)=>{          
    const sum = numbers.reduce((accumulator, currentValue)=>{          // passing arguments as accumulator and currentValue to understand the concept
    return accumulator + currentValue;
})

console.log(sum);

//accumulator , currentValue , returning
//    1             2              3
//    3             3              6
//    6             4              10
//   10             5              15
//   15             10             25


const newSum = numbers.reduce((accumulator, currentValue)=>{          // passing arguments as accumulator and currentValue to understand the concept
    return accumulator + currentValue;
},100)                                                                //here, passing 100 as an initial accumulator

console.log(newSum);

//accumulator  currentValue  returning sum
//  100             1            101
//  101             2            103
//  103             3            106
//  106             4            110
//  110             5            115
//  115             10           125