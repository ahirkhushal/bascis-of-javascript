// class keyword

// class makes function short
// let's learn through example

// we use class to make short functions and objects

class Userinfo{
    constructor(firstname, lastname, age, emailid, address){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.emailid = emailid;
        this.address = address;
    }

    about(){
        return `my name is ${this.firstname} ${this.lastname}, my age is ${this.age}, my emailid is ${this.emailid}, and i am from ${this.address}.`;
    }

    is18(){
        return this.age >= 18;
    }

    sing(){
        return  "la la la la la la"
    }
}



//1)
const user1 = new Userinfo("khushal", "ahir", 18, "khushal@gmail.com", "surat");
console.log(user1);
console.log(user1.about());


console.log(Object.getPrototypeOf(user1));

