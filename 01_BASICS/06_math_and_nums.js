const score = 700

const balance = new Number(200)

console.log(score);
console.log(balance);

console.log(balance.toString());


const str =balance.toString(); 
console.log(str.length);

// toFixed prints the specified no. of leading decimal values after number
console.log(balance.toFixed(2));

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // string in american standard commas
console.log(hundreds.toLocaleString('en-IN')); // string in indian standard commas




// -----------------------MATHS------------------------------------------

// console.log(Math.abs(-7));
// console.log(Math.round(3.4));
// console.log(Math.ceil(2.001));
// console.log(Math.floor(4.8));
// console.log(Math.max(3,5,8,1));
// console.log(Math.min(3,5,8,1));


// Math.random() gives value between 0 and 1
console.log(Math.random());

console.log(Math.ceil(Math.random()*10));

let min = 10
let max = 20

// formula to get random value in a range
console.log( Math.floor(Math.random() * (max-min+1)) + min );






