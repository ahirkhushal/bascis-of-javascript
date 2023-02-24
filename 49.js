//block scope v/s function scope


// let and const are block scope


//1) let example 
{//-------------------------------------------------------------------------------------------------------
//                                                                                                      //|
let let1 = "khushal"                                                                                    //|----> this is block
console.log(let1) // ---> you can print this value only inside the block                                //|
//                                                                                                      //|
}//-------------------------------------------------------------------------------------------------------

// console.log(let1) //---> you can not print let1's value outside the block



//2) const example
{//-------------------------------------------------------------------------------------------------------
    const const2 = "dharmi"                                                                              //|
    console.log(const2)  //----> this is working because the value we print is inside the block          //|----> this is block 
//                                                                                                     //|
}//-------------------------------------------------------------------------------------------------------

// console.log(const2) //---> here we get an error because we try to print value outside the block



//--------------------------------------------------------------------------------------------------------------------------------------------------



//var is function scope

//1) var example


{
    var firstname = "khushal";
    console.log(firstname);
}
console.log(firstname) //-----> you can print var varaible's value outside the block
//                  -----> because this whole file works as a function therefor you can can print var's value anywhere.

//thats why var is a function scope

