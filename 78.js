//this keyword in arrow function 



const obj1 = {

    fname: "khushal",
    age: 18,
    about: () => {
        console.log(this === window)
        console.log(this)
        console.log(`${this.fname} , ${this.age}`)
    }
}

obj1.about()  

//--> in arrow function this keyword doesn't work.
//--> in arrow function this keyword = window object as you can see