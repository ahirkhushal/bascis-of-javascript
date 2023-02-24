// about and is18 problem solve

// you want to create a variable and store (about and is18) function in that varibale
// and link that varable in user object 
// problem solve or not ? let's check



const funcmethod = {

    about: function(){
        return `my name is ${this.firstname} ${this.lastname}, my age is ${this.age}, my emailid is ${this.emailid}, and i am from ${this.address}.`
    },
    is18: function(){
        return  this.age >= 18 
    }

}

const userinfo = function(firstname , lastname , age  , emailid , address){
    const user = {}
    user.firstname  = firstname
    user.lastname  = lastname
    user.age  = age
    user.emailid  = emailid
    user.address  = address
    user.about = funcmethod.about
    user.is18 = funcmethod.is18
    
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


// now you can see the problem is solved 

// but what if,

// in funcmethod object you make a function but you forgot to link that function in user object.

// you can face an error..
// so what's the way to solve this problem
// lets solve in 82.js