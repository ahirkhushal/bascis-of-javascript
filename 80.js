// lets make big example of function , methods and use some short cuts


// i want make to data of users but not 1 or 2 or 3 users i want to make data of 1 lakh users
// so we need to much time to make 1lakh users data but i have shortcut
//lets make object inside function and in that object we put data of users in short way.

// so i want users firstname , lastname , age ,emailid , address , and 2 methods(function)

const userinfo = function(firstname , lastname , age  , emailid , address){
        const user = {}
        user.firstname  = firstname
        user.lastname  = lastname
        user.age  = age
        user.emailid  = emailid
        user.address  = address
        user.about = function(){
            return `my name is ${this.firstname}, my surname is ${this.lastname}, my age is ${this.age}, my emailid is ${this.emailid}, and i am from ${this.address}.`
        }
        user.is18 = function(){
            return  this.age >= 18 
        }
        return user
}

//1)
const user1 = userinfo("khushal", "ahir", 18, "khushal@gmail.com", "surat") 
console.log(user1)
console.log(user1.about())
console.log(user1.is18())

//2)
const user2 = userinfo("dharmi", "dhameliya", 17, "dharmi@gmail.com", "surat") 
console.log(user2)
console.log(user2.about())
console.log(user2.is18())


// you can add unlimited information of user


// but the more times you add user information , the more often a function called  (about and is18) will be created in user object.
//about and is18 function is needed only once
// so lets solve this problem in 81.js