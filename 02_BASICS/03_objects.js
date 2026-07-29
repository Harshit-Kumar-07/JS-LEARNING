// Singleton
// Object.create


const mySym = Symbol("key1")


// Object Literals
const user1 = {
    name : "harshit",
    [mySym] : "myk1", // this is the syntax
    age : 18,
    location : "pantnagar",
    email : "hora@google.com",
    isLoggedIn : false
}

// console.log(user1.location);
// console.log(user1["location"]);

// user1.email = "hora@this.com"
// Object.freeze(user1)// freezes all the values inside object
// user1.email = "dkfdkd"
// console.log(user1.email);


user1.greeting = function(){    
    console.log("Hello JS user");    
}

console.log(user1.greeting());

user1.greeting2 = function(){
    console.log(`Hello JS user ${this.name}`);    
}

console.log(user1.greeting2());

console.log(user1);
