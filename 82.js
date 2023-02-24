// forgot to link the function problem solve

//you need to use [[prototype]] or __proto__ 
// therefore if you forgot to link funcmethod object's function in user object , the user object autometically find that function from funcmethod object.





const funcmethod = {

    about: function(){
        return `my name is ${this.firstname} ${this.lastname}, my age is ${this.age}, my emailid is ${this.emailid}, and i am from ${this.address}.`
    },
    is18: function(){
        return  this.age >= 18 
    },

    forgot: function(){
        return `this function is not added in user object`
    }

}

const userinfo = function(firstname , lastname , age  , emailid , address){
    
    const user = Object.create(funcmethod) //--> you need to add that so if you forgot to link function than user object autometically find it from funcmethod object. 
    
    
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


console.log(user1.forgot())  // --> this function is not added in user object