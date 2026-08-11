function setUserName(usename){
    this.username = username;
}

function createUser(usename,email,password){
    
    setUserName.call(this, username)
    
    this.email = email
    this.password = password
}