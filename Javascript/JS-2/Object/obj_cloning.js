//object cloning or copying using spread operator (...)

const obj1 = {
    key1: "value1",
    key2: "value2"
}

const obj2 = {
    key1: "valueN",
    key3: "value3",
    key4: "value4"
}

const newObj= {...obj1, ...obj2, key6: "value6"}        //using ... for cloning, here key6 is extra adding to newObj

console.log(newObj);                    // in this output, the obj2-->key1 "valueN" ll get print, bcoz obj2 is spread after obj1
                                        
//if we spread obj1 after obj2 the key1 ll be printed is "value1"



//spread operatoe Ex-2
let myObj= {..."abc"}                 //here spread operator ll spread all 3 letters seperately and gives key as 0,1,2 and value as a,b,c
console.log(myObj);