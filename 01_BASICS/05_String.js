const name = "harshit"
let repoCount = 10

// old way
// console.log("my name is " + name + " and my repo count is : "+repoCount);

// modern way
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Harshit")

console.log(gameName[0]);
console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.substring(0,5));

const str = "    my_password gg         "

console.log(str)
// trim removes aage wale and peeche wale spaces
console.log(str.trim());

let url = "https://harshit.com/harshit%20kumar/"
console.log(url.replace('%20','-'));

console.log(url.includes("harsh"))


console.log(url.split('/'))