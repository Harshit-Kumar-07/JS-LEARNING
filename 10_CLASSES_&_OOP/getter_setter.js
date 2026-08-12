class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    // underscore lagana zaroori hai

    get password(){
        return `${this._password}xyz`
    }
    set password(value){
        this._password = value
    }
}

let u1  = new User("hora@kumar.com",123)
console.log(u1.password);
