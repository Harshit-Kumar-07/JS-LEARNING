const user = {
    username : "hora",
    logincount : 7,
    isLoggedIn : true,

    getUserDetails : function(){
        console.log(`Username : ${this}`);        
    }
}

console.log(user);
console.log(this);


function User(username, logincount, isLoggedIn){
    this.username = username;
    this.logincount = logincount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userone = new User("harshit",10,true)
const usertwo = new User("raman",12,false)
console.log(userone);
console.log(usertwo);

