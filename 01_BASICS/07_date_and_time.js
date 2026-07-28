let mydate = new Date()
console.log(mydate.toUTCString());

console.log(typeof mydate);

let mycreatedDate = new Date("9-7-2007");
console.log(mycreatedDate.toDateString())

let mytimestamp = Date.now()
console.log(mytimestamp)
let ts = mycreatedDate.getTime()
console.log(ts);

console.log(Math.floor(mytimestamp/1000))

