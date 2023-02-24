// call 
// apply
// bind

const obj1 = {

    fname: "khushal",
    age: 18,
    about(number , letter){

        console.log(`${this.fname} , ${this.age}` , number , letter)
    }
}

const obj2 = {

    fname: "dharmi",
    age: 17,
    
}

obj1.about(2 , "k") // that means we calling about function. ==> output: khushal , 18

// but i want obj2's values (dharmi,17) when we call about function. 

// so we need to use call 

//--------------------------------------------------------------------------------------                                                                                               
//call                                                                                //|              
obj1.about.call(obj2 , 1 , "d")                                                       //|                                         
// we use about function from obj1 to print obj2's values.                            //|                                                                  
//--------------------------------------------------------------------------------------                                                                                               



//------------------------------------------------------------------------------------------                                                                                          
//apply                                                                                    //|       
//                                                                                         //|  
//apply method same as call method                                                         //|                              
obj1.about.apply(obj2 , [ 1 , "d"]) //--> you need to add values in array in apply method  //|                                                                                    
// and you will get about same as call                                                     //|                                        
//------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------                                                                                                   
//bind                                                                                    //|               
// bind method return function                                                            //|                                       
const func = obj1.about.bind(obj2 , 1 , "d")                                              //|                                                     
func()                                                                                    //|                          
//------------------------------------------------------------------------------------------

