// getter

// getter

class obj {
    constructor(firstname  , lastname , age){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }

     fullname(){
        return `${this.firstname} ${this.lastname}`
    }

    get fullname1(){
        return `${this.firstname} ${this.lastname}`
    }
}

const get = new obj("khushal" , "ahir" , 18)
console.log(get)
console.log(get.fullname())  //--> when you call that function its print in console
//                           //--> but i want that function without calling
//                           //--> like--> console.log(get.fullname) 

// when you use this
console.log(get.fullname)  //--> its print full function but i want to return function usinf this code

// so you want to add get before in obj class's fullname function 


console.log(get.fullname1) //--> you can see in class we put get before fullname1 function that' why we returned function without calling.