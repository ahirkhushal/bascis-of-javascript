//fill method

//1st use

//--------------------------------------
const myarray = new Array(10).fill(1); //|
console.log(myarray); //|--> this method is used for fill some value in array
//--------------------------------------

// in this example we enter this-->   const myarray = new Array(10).fill(1)
//it means we make new array of 10 lines and we fill this array with 1 number.
//result [1,1,1,1,1,1,1,1,1,1] --> 10 lines array and fill 1 number.

//2nd use

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//task
// i want 0,0,0 number insted of 3,4,5 number in array
// like this
// const array = [1,2,3,4,5,6,7,8,9,10]
// const array = [1,2,0,0,0,6,7,8,9,10]

array.fill(0, 2, 5); //--> (0,2,5)
// --> 0 = number we want in array
// --> 2 = from there we have to start its index number --> number 3's index number = 2
// --> 5 = the index number of the next number as far as we have to go --> number 6's index number

//it means number 3,4,5 will change into 0,0,0
console.log(array);
