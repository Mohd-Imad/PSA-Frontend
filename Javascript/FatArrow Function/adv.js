/* function test() {
    console.log(this)
}
test() */

let test = () => {
    console.log(this)         //here, this---keyword, returns an empty object{}
}
test()