// don't do this mistake


const obj1 = {

    fname: "khushal",
    age: 18,
    about: function(){
        
        console.log(`${this.fname} , ${this.age}`)
    }
}

obj1.about()  //--> this is right but what if i store this value in varible

//-------------------------------------------------------------------------------------------------------------                                                                                                                                    
const func = obj1.about;                                                                                     //|                                               
func()   //--> here we get an undefined.                                                                     //|                                                               
//                                                                                                           //|                       
//                                                                                                           //|                       
// because                                                                                                   //|                                  
//                                                                                                           //|                       
// const func = obj1.about   ===      const func = function(){                                               //|                                                                                     
//                                                               console.log(`${this.fname} , ${this.age}`)  //|                                                                                                                                  
//                                                             }                                             //|                                                                                       
//                                                                                                           //|                             
// that means this keyword = window object                                                                   //|                                                                 
// and that reason we get an undefined                                                                       //|                                                              
//-------------------------------------------------------------------------------------------------------------                                                                                                                                    



//lets fix it by bind method
const func1 = obj1.about.bind(obj1);
func1()
