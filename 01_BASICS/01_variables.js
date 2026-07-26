const accountId = 12345
var name = "harshit"
let email  = "hora@google.com"
accountCity = "Pantnagar" // this is not a good practice
let accountState

/*
    variables are declared in 2 ways in js (var and let)
    prefer not to use var because of issue of block scope and
    functional scope
    use let in modern time
*/

console.log(email)
console.table([accountId,name,email,accountCity,accountState])