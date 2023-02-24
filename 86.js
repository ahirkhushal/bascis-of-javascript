// lets use new keyword in example



const   Userinfo = function(firstname , lastname , age  , emailid , address){
     

    this.firstname  = firstname
    this.lastname  = lastname
    this.age  = age
    this.emailid  = emailid
    this.address  = address
    
   
    
}



Userinfo.prototype.about = function(){
    return `my name is ${this.firstname} ${this.lastname}, my age is ${this.age}, my emailid is ${this.emailid}, and i am from ${this.address}.`
}

Userinfo.prototype.is18 = function(){
    return  this.age >= 18 
}

Userinfo.prototype.forgot = function(){
    return `this function is not added in user object`
}




console.log(Userinfo.prototype)




//1)
const user1 = new Userinfo("khushal", "ahir", 18, "khushal@gmail.com", "surat") 
console.log(user1)
console.log(user1.about())
console.log(user1.is18())


//----------------------------------------------------------------------------------------------------------------------------------------//|                                                                                                                                                                                                                                                                                   
// i want keys of userinfo function                                                                                                       //|                                                                          
//                                                                                                                                        //|
for(let key in user1){                                                                                                                    //|                                                          
//                                                                                                                                        //|
    // console.log(key)  //--> you will get all keys including prototypes key but i want only userinfo function key so what can we dO?     //|--> geting keys                                                                                                                                                                          
    if(user1.hasOwnProperty(key)){                                                                                                        //|                                                                      
//                                                                                                                                        //|
        console.log(key)                                                                                                                  //|                                                              
    } // ---> now you will get only key og userinfo function                                                                              //|                                                                                                  
}                                                                                                                                         //|                                      
//----------------------------------------------------------------------------------------------------------------------------------------//|



// when you use the new keyword, you must capitalize the first letter of the function name. ---> for example = Userinfo
// you can see the output after appling new keyword.