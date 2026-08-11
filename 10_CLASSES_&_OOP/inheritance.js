class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)        
    }

}

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }

    addCourse(){
        console.log(`A new course was created by ${this.username}`)        
    }

}

let teacher = new Teacher("Yatika","yg@m.com")
console.log(teacher.addCourse());
