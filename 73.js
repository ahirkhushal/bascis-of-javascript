// clone using Object.assign

const obj1 = {

    name: "khushal"
}

const obj2 = obj1

//now i am ading some value in obj1 object
obj1.age = 18;


console.log(obj1)
console.log(obj2)

// i adding the value in obj1 but it also adding in obj2 




// but i want to add value only in obj3 , not obj4
//so we have to do clone objects
//lets do it

//---------------------------------------------------------------------------                                                                              
const obj3 = {                                                             //|                 
//                                                                         //|   
    name: "dharmi"                                                         //|                     
}                                                                          //|                     
//                                                                         //|                                                                              
// const obj4 = {...obj3}     //--> first way to clone object              //|                                                                 
const obj4 = Object.assign({} , obj3)   //--> second way to clone object   //|                                                                           
obj3.age = 18;                                                             //|                 
//                                                                         //|
//                                                                         //|
console.log(obj3)                                                          //|                   
console.log(obj4)                                                          //|                   
//                                                                         //|                       
//--------------------------------------------------------------------------- 
                    