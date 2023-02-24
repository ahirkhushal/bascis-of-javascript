// primitve vs refrence data types

//primitve

let num1 = 4;
let num2 = num1;

console.log("number1 is", num1)
console.log("number2 is", num2)
num1++;

console.log("numbers after changing value of num1")
console.log("number1 is", num1)
console.log("number2 is", num2)


//refrence data types

//its apply on arrays and objects

let array1 = ["item1", "item2"]
let array2 = array1;


console.log("array1 is", array1);
console.log("array2 is ", array2);
array1.push("item3");

console.log("array's value after changing")
console.log("array1 is", array1);
console.log("array2 is", array2);



