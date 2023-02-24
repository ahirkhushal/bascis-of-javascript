//splice method

//splice method use for delete and insert something in array



//example

//-------------------------------------------------------------- 
//                                                            //|
const myarray = ["item1", "item2" , "item3"]                  //|
//                                                            //|  
//i want to delete "item2" in array                           //|  
//                                                            //|  
myarray.splice(1,1) //--> (1,1)                               //|  
//                                                            //|  
//1st 1 --> index number of "item2"                           //| --> for delete 
//2ns 1 --> how many array you want to delete from index 1    //|  
//                                                            //|  
console.log(myarray)                                          //|  
//                                                            //|  
//                                                            //|  
//--------------------------------------------------------------





//--------------------------------------------------------------------------------------
//                                                                                     //|
const myarray1 = ["item1", "item2" , "item3"]                                          //|
//                                                                                     //|  
//i want to insert "inserted item" in array                                            //|  
//                                                                                     //|  
myarray1.splice(1,0,"inserted item") //--> (1,0,"inserted item")                       //|  
//                                                                                     //|  
// 1 --> index number of "item2"                                                       //| --> for insert 
// 0 --> how many array you want to delete from index 1                                //|  
// "inserted item" = insert item                                                       //|  
//                                                                                     //|  
console.log(myarray1)                                                                  //|  
//                                                                                     //|  
//                                                                                     //|  
//---------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------------
//                                                                                                   //|
const myarray2 = ["item1", "item2" , "item3"]                                                        //|
//                                                                                                   //|  
//i want to insert "inserted item" in array                                                          //|  
//                                                                                                   //|  
myarray2.splice(1,2,"inserted item1","inserted item2") //--> (1,2,"inserted item1","inserted item2") //|  
//                                                                                                   //|  
// 1 --> index number of "item2"                                                                     //| --> for delete and insert 
// 2 --> how many array you want to delete from index 1                                              //|  
// "inserted item1" , "inserted item2" = insert item                                                 //|  
//                                                                                                   //|  
console.log(myarray2)                                                                                //|  
//                                                                                                   //|  
//                                                                                                   //|  
//-----------------------------------------------------------------------------------------------------