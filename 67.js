// iterables

// jispe hum for of loop laga sakein
// srting , array are iterables


//--------------------------------------------------------------------------
//                                                                          //|
//1) string example                                                         //|
//                                                                          //|
const string = "khushal"                                                    //|
//                                                                          //|
for(let char of string){                                                    //|
//                                                                          //|
    console.log(char)                                                       //|
}                                                                           //|
// as you can in output, "khushal" string is printed in every character.    //|
// so string is iterable.                                                   //|--> this is iterables
//                                                                          //|
//                                                                          //|
//                                                                          //|
//2) array example                                                          //|
//                                                                          //|
//                                                                          //|
const array = ["khushal" , "ayush" , "mohit" , "harshit"]                   //|
//                                                                          //|
for(let char of array){                                                     //|
//                                                                          //|
    console.log(char)                                                       //|
}                                                                           //|
//                                                                          //|
//--------------------------------------------------------------------------  


//--------------------------------------------------------------------------
// lets try iterables in objects                                           //|
//                                                                         //|
const myobj = {                                                            //|
//                                                                         //|
    key1 : "value1",                                                       //|
    key2 : "value2"                                                        //|--> objects is not iterables 
}                                                                          //|
//                                                                         //|
for(let key of myobj){                                                     //|
    console.log(key)                                                       //|
}                                                                          //|
//we get an error because objects is not iterables                         //|
//                                                                         //|
//-------------------------------------------------------------------------



