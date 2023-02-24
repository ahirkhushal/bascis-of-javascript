// short example of static method and static properties

class person{
    constructor(name , surname , age){

        this.name = name
        this.surname = surname
        this.age = age
    }

    static newmet(){
        return  `this is short example of static method.`
    }

    static prop = `this is short example of static properties.`
}

const person1 = new person("khushal" , "ahir" , 18)
console.log(person1)

console.log(person.newmet())  //--> static method
console.log(person.prop) //--> static properties