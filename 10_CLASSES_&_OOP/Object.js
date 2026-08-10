function multiplyBy5(num){
    return num*5
}

console.log(multiplyBy5(6));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username,score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`score is : ${this.score}`);    
}

const chaiuser = new createUser("chai",20)
const teauser = new createUser("tea",100) 

chaiuser.increment()
chaiuser.printMe()


