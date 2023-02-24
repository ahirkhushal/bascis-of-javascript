// short example of set


class setter {
    constructor(firstname  , lastname , age){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }

    get fullname(){
        return `${this.firstname} ${this.lastname}`
    }


    set rename(fullname){
        const [firstname , lastname] = fullname.split(" ") 
        this.firstname = firstname
        this.lastname = lastname
    }
    
}


const output = new setter("khushal" , "ahir" , 18)
console.log(output)


output.rename = "mohit kavad"
console.log(output.fullname)