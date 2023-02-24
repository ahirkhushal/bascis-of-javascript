//sort method - 2nd page

//i want all number low to high 

const numbers = [500,100,1200,4500,3000]

numbers.sort((a,b) => {
    return a-b;
})

console.log(numbers)

//RESULT --->  [100, 500, 1200, 3000, 4500]

// HOW?


//LET'S UNDERSTAND


//---------------------------------------------------
//                                                 //|
//important:-  this is for (a,b) => {return a-b)   //|
//                                                 //|
//when answer is positive print b value first      //|
//when ans is nagative print a value first         //|
//                                                 //|
//---------------------------------------------------


// [500,100,1200,4500,3000]

// a , b
//500-100 = 400      --->   answer is positive (print:b)     --->       ans: 100
//500-1200= -700     --->   answer is nagetive (print:a)     --->       ans: 500
//1200-4500 = -3300  --->   answer is nagetive (print:a)     --->       ans: 1200 
//4500-3000 = 1500   --->   answer is positive (print:b)     --->       ans: 3000
//                                                                      ans: 4500


// RESULT = [100,500,1200,3000,4500]