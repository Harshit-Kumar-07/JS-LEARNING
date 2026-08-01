// Immediately Invoked Function Expression (IIFE)
// matlab ussi time function likha aur ussi time call bhi kiya

(function(){
    console.log("DB CONNECTED");    
})(); // semicolon is imp to write after IIFE


(function addThree(n){
    console.log(n+3);    
})(5)