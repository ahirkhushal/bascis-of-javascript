//Maps object - page : 1

//---------------------------------------------------
//some rules                                       //|
//map is an iterable                               //|
//store data in ordered fashion                    //|
//store key value pair (like objects)              //|
//duplicate keys are not allowded like objects     //|
//---------------------------------------------------



// diffrence between maps and objects

//---------------------------------------------------------------------------------------------------------
//                                                                                                        //|
//objetcs can only have string or symbol                                                                  //|
//as key                                                                                                  //|
//example                                                                                                 //|
//                                                                                                        //|
const myobj = {                                                                                           //|
//                                                                                                        //|
    name : "khushal",                                                                                     //|--> objects
    age  : 18,                                                                                            //|
    1    : "one"                                                                                          //|
}                                                                                                         //|   
console.log(myobj)                                                                                        //|
for(let met of Object.keys(myobj)){                                                                       //|                                  
console.log(met , typeof met)}                                                                            //|
//in this object name and age is srting and 1 is symbol. you can use only this three things in objects.   //|
//---------------------------------------------------------------------------------------------------------     




//------------------------------------------------------------------------------------------------------
//                                                                                                   //|
//in Map you can use anything as key                                                                 //|
//like : string , array , number                                                                     //|
//example                                                                                            //|
//                                                                                                   //|
const mapsobj =  new Map()                                                                           //|--> maps object
mapsobj.set( 1 , "one")                     //-> 1 is key and one is value                           //|
mapsobj.set( "name" , "khushal")            //-> name is key and khushal is value                    //|
mapsobj.set( "age" , 17 )                   //-> age is key and 17 is value                          //| 
//                                                                                                   //|
//                                                                                                   //|
console.log(mapsobj)                                                                                 //|                              
console.log(mapsobj.get("name"))                                                                     //|
console.log(mapsobj.get("age"))                                                                      //|
console.log(mapsobj.get(1))                                                                          //|
//-----------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------
//you can also do like this                                                               //|
const number = new Map([["key1" , "value1"],["key2" , "value2"],["key3" , "value3"]])     //|--> this is second method for Map object
console.log(number)                                                                       //|
//-------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------
//                                                                        //|
console.log(mapsobj.keys())   //|--> 1st way to print keys                //|
//                                                                        //|
//----------------------------------                                      //|
for(let key of mapsobj.keys()){   //|--> 2nd way to print keys            //|--> two ways to print keys 
    console.log(key, typeof key)  //|--> print keys individually          //|
}                                 //|                                     //|
//----------------------------------                                      //|
//                                                                        //|
//-------------------------------------------------------------------------- 



//----------------------------------------------------------------------------
// Aa you know that Map objects is iterable                                 //|
// so lets prove that by using for of loop                                  //|
// if for of loop runs it assumes that the Maps object is iterable          //|
//                                                                          //|
for(let [keys , value] of mapsobj){                                         //|---> this is (for of loop) for mapsobj  
    console.log(keys , value)                                               //|
}                                                                           //|
//                                                                          //|
//                                                                          //|
// its works it means Map object is iterable                                //|
// [keys , value] ==> this is destructuring of myobj                        //|
//---------------------------------------------------------------------------- 


