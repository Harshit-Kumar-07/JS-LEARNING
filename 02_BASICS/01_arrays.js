// const arr = [3,5,7,4,2]
// console.log(arr[2])

// const brr = new Array(3,7,5,9,8,9)
// console.table(brr);

// // Array methods
// brr.push(10);
// console.table(brr);
// brr.pop()
// console.table(brr);

// console.log(brr.includes(9));
// console.log(brr.indexOf(9));

const arr = [3,4,5,6,7,8,0]
console.log(`arr is : ${arr} `);

const mna1 = arr.splice(1,3);// splice removes that part from array
// it manipulates the original array
console.log(`arr splice is : ${mna1} `);

const mna2 = arr.slice(2,4)
// it doesn't manipulates the original array
console.log(`arr slice is : ${mna2} `);// slice don't remove that part from array
