//important array method
//ForEach 



//ForEach Method

const numbers = [2,4,6,8,9,10]


function myfunc(number , index){

    console.log(`index id ${index} , number is ${number}`)
}
//-------------------------------------------------
                                                //|
// myfunc(numbers[0], 0);                       //|
// myfunc(numbers[1], 1);                       //|--> this is first and normal method to call function
// myfunc(numbers[2], 2);                       //|
                                                //|
//-------------------------------------------------                                                
                                                //|
// for(let i = 0; i < numbers.length; i++){     //|
//     myfunc(numbers[i], i)                    //|--> this is second and short method to call function
// }                                            //|
                                                //|
//-------------------------------------------------
numbers.forEach(myfunc)                         //|--> very shortest method to call function
//-------------------------------------------------



// you can also do like this 

//-------------------------------------------------
numbers.forEach(function(number){               //|
    console.log(`${number}*2 = ${number*2}`)    //|--> this is second type of ForEach method
});                                             //|
//-------------------------------------------------



//--------------------------------------------------
numbers.forEach((number) => {                    //|
    console.log(`${number}*3 = ${number*3}`)     //|--> this is a arrow function of ForEach method
});                                              //|
//--------------------------------------------------