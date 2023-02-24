//defalut parameters

//lets understand by two examples

//1) long way example
//if we not enter b value then there will we get an error 
//but we can run code without giving b value let's see.

const sum = function(a,b){

    //--------------------------------------------------//|
    if(typeof b === "undefined")                        //|                           
    {                                                   //|---->this is the way to run code without giving b value
        b=1                                             //|
    }                                                   //|
    //--------------------------------------------------//|   
    
    
    return a+b;
}
const short = sum(4) 
console.log(short)


//2)short way example


const sum1 = function(a,b=1)//------> in this example you can see (b=1) that means if we not put b value then program automatically add b's value = 1.and this is the shortest way to do this.
{   
    return a+b;
}
const short1 = sum1(4) 
console.log(short1)