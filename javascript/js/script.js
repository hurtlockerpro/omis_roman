
let x = 10 // new syntax
x = "text"

var x1 = 100 // old syntax
var x1 = "string"

//let x = 11

let s = "string"
let n = 10
let b = true
let u = undefined
let nl = null
let a1= []
let a2 = {} // object

//   true

// ==  equal 
// !=  not equal
// >=, <=,  <, >
// === +type 
// !== +type

// && -> and
// true = true && true && true
// false = true && false && true 


// || -> or
// true = false || false || true
// false = false || false || false

//if (n == 10 && s == "string" && b == false) {
if (n == 11 || s == "string2" || b == false) {
    console.log("yes, n = 10" + " abc", "This new text", "this is another text")
} 
else if (u == undefined){
    console.log("yes u = undefined")
}
else {
    console.log("This is else ")
}

// ARRAY 

//             0      1       2 
const arr1 = [100, "string", true] 
/*
const myvar = 100
myvar = "sagsfg"
*/
console.log(arr1[1])

arr1[2] = false

console.log(arr1[2])


/* loops */


// increment ++  ->  ++index  -> index++
// decrement -- 
// 
for (let index = 0; index < arr1.length; index += 2) {

    console.log("element=", arr1[index]);
    
}

