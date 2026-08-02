// // // // // // // // // for of loop

// // // // // // // // let arr = [1, 2, 3, 4, 5];

// // // // // // // // for (const ele of arr) {
// // // // // // // //     console.log(ele);
// // // // // // // // }

// // // // // // // let map = new Map();
// // // // // // // map.set("USA" , "Washington DC");
// // // // // // // map.set("India" , "New Delhi");
// // // // // // // map.set("UK" , "London");

// // // // // // // for (const [k, v] of map) {
// // // // // // //     console.log(`${k} : ${v}`);
// // // // // // // }


// // // // // // const obj = {
// // // // // //     js : "JavaScript",
// // // // // //     py : "Python",
// // // // // //     cpp : "C++"
// // // // // // }

// // // // // // for (const [k, v] of Object.entries(obj)) {
// // // // // //     console.log(`${k} is abbreviation for a ${v} file.`);
// // // // // // }


// // // // // let arr = ["js", "py", "cpp"]
// // // // // // arr.forEach(function(item){
// // // // // //     console.log(item)    
// // // // // // })


// // // // // // arrow function
// // // // // arr.forEach( (item)=> {
// // // // //     console.log(item)
// // // // // })


// // // // const myarr = [
// // // //     {
// // // //         language : "JavaScript",
// // // //         fileExtension : "js"
// // // //     },
// // // //     {
// // // //         language : "Python",
// // // //         fileExtension : "py"
// // // //     },
// // // //     {
// // // //         language : "C++",
// // // //         fileExtension : "cpp"
// // // //     }
// // // // ]

// // // // myarr.forEach((item) => {
// // // //     console.log(item.language)   
// // // // })



// //  let nums = [1,2,3,4,5,6,7,8,9,10]

// // // const newnums = nums.filter( (item) => item > 5)
// // // console.log(newnums);



// // let newnums = []

// // nums.forEach(  (item) => {
// //     if(item > 5)newnums.push(item)
// // } )

// // console.log(newnums);


// let nums = [1,2,3,4,5,6,7,8,9,10]

// // chaining of methods
// let newnums = nums.map( (item) => item*10  )
//                 .map( (item) => item+=1 )
//                 .filter( (item) => item>40 )
// console.log(newnums);
  




let mycart = [
    {
        course : "JS course",
        price : 2999
    },
    {
        course : "PY course",
        price : 4999
    },
    {
        course : "DS course",
        price : 9999
    },
    {
        course : "JAVA course",
        price : 3999
    }
]

let priceToPay = 0;
mycart.forEach( (item) => (priceToPay += item.price) )
console.log(`Total Bill : ${priceToPay}`);
