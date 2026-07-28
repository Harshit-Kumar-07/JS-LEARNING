// Primitive Data-type 

// 7 types : String , null , Number, BigInt, 
//           Undefined, Boolean, Symbol

// symbols are unique
const Id = Symbol('123')
const anotherId = Symbol('123')
console.log(Id === anotherId);

const bigNumber = 3243435453433232n

// Reference (Non-primitive)

// Arrays ,Objects, functions


// array
const arr = ["hora","harshit"]

// object
let myObj = {
    name : "harshit",
    age : 18
}

const myFun = function(){
    console.log("Hello World");    
}

myFun()

console.log(typeof myFun);
