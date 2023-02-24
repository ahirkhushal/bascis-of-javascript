//use of prototype in example

// as you learn in prototype that functions givas us a empty object
// it means when we created userinfo function it gave us free space(empty object)
// so why do we need to create a seprate object named funcmethod.

//so let's enter the value of funcmethod object in the empty object of the userinfo function.



const userinfo = function(firstname , lastname , age  , emailid , address){
    const user = Object.create(userinfo.prototype)  
    
    
    user.firstname  = firstname
    user.lastname  = lastname
    user.age  = age
    user.emailid  = emailid
    user.address  = address
    
   
    return user
}



userinfo.prototype.about = function(){
    return `my name is ${this.firstname} ${this.lastname}, my age is ${this.age}, my emailid is ${this.emailid}, and i am from ${this.address}.`
}

userinfo.prototype.is18 = function(){
    return  this.age >= 18 
}

userinfo.prototype.forgot = function(){
    return `this function is not added in user object`
}




console.log(userinfo.prototype)




//1)
const user1 = userinfo("khushal", "ahir", 18, "khushal@gmail.com", "surat") 
console.log(user1)
console.log(user1.about())
console.log(user1.is18())



console.log(user1.forgot())

