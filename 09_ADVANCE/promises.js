// // // // // .then() is for resolve
// // // // // .catch() if for reject
// // // // // .finally() matlab jo bhi hai vo bata do


// // // // // const promise1 = new Promise(function(resolve,reject){
// // // // //     // Do any async task
// // // // //     // DB calls, cryptography, network calls
// // // // //     setTimeout(function(){
// // // // //         console.log("async task is complete")
// // // // //         resolve()
// // // // //     },1000)
    
// // // // // })

// // // // // promise1.then(function(){
// // // // //     console.log("Promise consumed");    
// // // // // })



// // // // new Promise(function(resolve,reject){
// // // //     setTimeout(function(){
// // // //         console.log("async task 2");        
// // // //     },2000)
// // // // }).then(function(){
// // // //     console.log("async task resolved");    
// // // // })



// // // const promise3 = new Promise(function(resolve,reject){
// // //     setTimeout(function(){
// // //         console.log("in promise 3");
// // //         resolve({username : "hora", email : "hora@example.com"})
// // //     },3000)
// // // })

// // // promise3.then(function(user){
// // //     console.log(user.username);
// // //     console.log(user.email);
    
// // // })


// // const promise4 = new Promise(function(resolve,reject){
// //     setTimeout(function(){
// //         let error = true;
// //         if(!error){
// //             resolve({username : "hora", password : "123"})
// //         } else{
// //             reject('ERROR : KUCH CHEEZ WENT WRONG')
// //         }
// //     },1000)
// // })

// // promise4
// // .then(function(user){
// //     console.log(user)
// //     return user.username
// // })
// // .then((username) => {
// //     console.log(username);    
// // })
// // .catch((error) => {
// //     console.log(error);    
// // })
// // .finally(function(){
// //     console.log("Promise is either resolved or rejected");    
// // })




// let promise5 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let err = true;
//         if(!err){
//             resolve({username : "hora",password : "0077"})
//         }
//         else reject('JS WENT WRONG')
//     },1000)
// })

// async function consumePromiseFive(){
//     const response = await promise5
//     console.log(response);    
// }

// consumePromiseFive()


async function getUserData(){
    try{
        let response = await fetch('https://api.github.com/users/Harshit-Kumar-07')
        let data = await response.json();
        console.log(data)
    }
    catch(e){
        console.log("error : ",e);
        
    }
}

getUserData()