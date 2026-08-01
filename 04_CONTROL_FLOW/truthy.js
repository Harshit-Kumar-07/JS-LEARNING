

// // // falsy values

// // false , 0, -0, BigInt 0n, "", null, undefined, NaN




// // // truthy values

// // "0", 'false' , " " , [] , {} , function(){} 





// // Nullish coalescing operator (??) null ya undefined ko check karta hai 

// let val = null ?? 12
// console.log(val);

// val = 18 ?? 67
// console.log(val);

// val  = undefined ?? 63
// console.log(val);


// val = null ?? undefined ?? 34 ?? 48
// console.log(val);



// ternary operator

const price = 100
(price > 100) ? console.log("Greater than Hundred") : console.log("Less than Hundred");



