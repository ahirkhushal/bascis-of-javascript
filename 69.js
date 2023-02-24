// set (it is iterables) - page: 1


// condition of set 

//1) --> store data
//2) --> sets also have its own method
//3) --> no index-based access
//4) --> order is not guaranted
//5) --> unique items only (no duplicate allowed) 


 
// lets understand set with example 

const array = [1,2,3] // ---> this is normal array
const array1 = new Set([1,2,3]) //--> this is set       --->        1) store data = [1,2,3]     --->        2) diffrent method
console.log(array1)
console.log(array1.length) // ---> 3) no index based accsess that means you can not get index number in set

//------------------------------------------------------------------------                                                                                
//if you want to find length of set then apply for of loop               //|      
let length = 0;                                                          //|                   
for(let char of array1){                                                 //|     
    length++;                                                            //| 
}                                                                        //|      
//                                                                       //|      
    console.log(`current length is`,length)                              //|          
//                                                                       //|      
//   ans is 3 and array1's length is 3                                   //|          
//                                                                       //|        
//------------------------------------------------------------------------ 

//4) order is not guaranted 
  
// const array1 = new Set([1,2,3])  --> in this variable we can see [1,2,3] in this order , but a set method can also have [2,3,1],[3,2,1] in this order.
// which is not guarented


// 5) unique items only (no duplicate allowed) 
const array2 = new Set([1,2,3,3,2,1])  // --> in set you can use one value for on time like--> [1,2,3]

// --> [1,2,3,3]  --> you cannot use number3 second time 
// --> if you add value like this --> [1,2,3,3,2,1] --> than set print only [1,2,3]  --> as you can see in output.

console.log(array2)