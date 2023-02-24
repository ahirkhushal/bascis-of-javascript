//intro to arrays


//how to creat arrays

//arrays indexing

//array :- array stores more than one values

let fruits = ["banana", "mango", "orange"]
console.log(fruits)
fruits[1] = "kivi" 
console.log(fruits);
console.log(Array.isArray(fruits))

let number = [1,2,3,4,5,6]
console.log(typeof number, number)
console.log(Array.isArray(number))


let obj = {}
console.log(typeof obj)
console.log(Array.isArray(obj))

let mixed = [1,2,3, "khushal" , null, undefined]

console.log(typeof mixed)
console.log(mixed[1])