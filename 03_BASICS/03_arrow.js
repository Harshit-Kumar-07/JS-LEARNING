// // let user = {
// //     username: "harshit",
// //     price : 999,

// //     welcomeMessage : function(){
// //         console.log(`${this.username} ,welcome to our website`)
// //         console.log(this);
        
// //     }
// // }// this erfers to the current context  

// // user.welcomeMessage()
// // user.username = "hora"
// // user.welcomeMessage()

// const addtwo = (n,m) => {
//     return n+m // explicit return
// }

// const addthree = (a,b,c) => (a+b+c) // implicit return

// console.log(addtwo(4,5));
// console.log(addthree(4,5,6));


const fun = () => ({username  : "sallu bhai"})
console.log(fun);
