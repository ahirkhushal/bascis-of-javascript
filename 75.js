// Methods
// (this keyword)

//function inside objects
//using of this keyword

const person = {
  Name: "khushal",
  age: 18,
  about: function () {
    console.log(`my name is ${this.Name}, and my age is ${this.age}`);
  },
};

person.about();

// in this exaple we use this keyword

// in this keyword this keyword defines person object

// this = person

// beacuse we call the function like this
// person.about()

// that means in about section this keyword use person object's key value pair.

//-------------------------------------------------------------------------------------------------------------------------                                                                                                                                 
//                                                                                                                        //|       
//let's understand by big example                                                                                         //|                                        
//                                                                                                                        //|       
function personinfo() {                                                                                                   //|                              
  console.log(`my name is ${this.Name} , my age is ${this.age}`);                                                         //|                                                                        
}                                                                                                                         //|        
//                                                                                                                        //|       
//                                                                                                                        //|       
const person1 = {                                                                                                         //|                        
    Name: "nishit",                                                                                                       //|                          
    age: 19,                                                                                                              //|                   
    about: personinfo                                                                                                     //|                            
  };                                                                                                                      //|           
//                                                                                                                        //|       
const person2 = {                                                                                                         //|                        
    Name: "dharmesh",                                                                                                     //|                            
    age: 20,                                                                                                              //|                   
    about: personinfo                                                                                                     //|                            
  };                                                                                                                      //|           
//                                                                                                                        //|       
const person3 = {                                                                                                         //|                        
    Name: "mahesh",                                                                                                       //|                          
    age: 21,                                                                                                              //|                   
    about: personinfo                                                                                                     //|                            
  };                                                                                                                      //|           
//                                                                                                                        //|       
person1.about()                                                                                                           //|                      
person2.about()                                                                                                           //|                      
person3.about()                                                                                                           //|                      
//                                                                                                                        //|       
//you can use (this) keyword like that examples.                                                                          //|                                                       
//-------------------------------------------------------------------------------------------------------------------------  