// let arr = [2,4,6,8]
// let brr = [1,3,5,7]

// // arr.push(brr)
// // console.log(arr);

// let merged = arr.concat(brr)
// console.log(merged);

// let crr = [5,4,2,8]

// // spread operator
// let merge = [...arr, ...brr, ...crr] // modern way to merge
// console.log(merge);


// flatenning array
let arr = [1,3,4,[43,4,4],4,5,6,[3443,3,4,[43,4,7]]]
let flatten_array = arr.flat(Infinity)
console.log(flatten_array);

console.log(Array.isArray("Harshit"))
console.log(Array.from("Harshit"))
console.log(Array.from({Name : "Harshit"}));// interesting

let score1 = 100;
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));






