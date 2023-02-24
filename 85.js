// New keyword


const myfunc  = function(name , age){

    
    this.name = name
    this.age = age
    
    
}


myfunc.prototype.about = function(){
    console.log(this.name , this.age)
}


const user1 = new myfunc("khushal" , 18)
console.log(user1)

user1.about()


// new keyword doing three work

//1) new keyword makes empty object in function
    //  it means in myfunc function this keyword becomes object name which is empty

//2) new keyword returns value
    // it means new keywpord returns this keywords value

//3) new keyword makes autometically __proto__ or [[prototype]]
    // it means in myfunc function this keyword who becomes objects create autometically  --> (Objects.create(myfunc.prototype))