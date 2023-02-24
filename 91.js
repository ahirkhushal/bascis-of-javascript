//setter

//set 
// for example i want to set users firstname and lastname
// first let's  see deiffrent method

class setter {
    constructor(firstname  , lastname , age){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }

    get fullname(){
        return `${this.firstname} ${this.lastname}`
    }

    // method1)
    setname(firstname , lastname){
        this.firstname = firstname
        this.lastname = lastname
    }

    // method3)
    set fullname(fullname){
        const [firstname , lastname] = fullname.split(" ")  // fullname.split(" ") --> that means when you write a full name like "mohit kavad" 
        // so there is space between mohit and kavad so split(" ")'s work is make diffrent of this name like firstname is mohit and last name is kavad.
        this.firstname = firstname
        this.lastname = lastname
    }
    
}


const set = new setter("khushal" , "ahir" , 18)
console.log(set)



// method 1st's output
set.setname("dharmi", "dhameliya")
console.log(set.fullname)
console.log(set)
// now original value on firstname , last name is "dharmi" , "dhameliya"



//2ND METHOD

set.firstname = "abc"
set.lastname = "xyz"
console.log(set)



//but what if i change full name??  lets see

//before use method(3)
// set.fullname = "ayush kavad" 
// console.log(set.fullname) // --> there is not any changes in full name but i want changes 



// so we need to use set for make changes in fullname


//after use method(3)
// now let's see 

set.fullname = "mohit kavad"
console.log(set)
