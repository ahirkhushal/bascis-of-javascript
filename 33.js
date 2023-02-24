//array destructuring

const array = [ "dharmi", "khushal", "ayush", "mohit", "papa", "mummy"]


//1) mehtod

const newar = array;
console.log(newar)


//2) method

const [array1, array2, ...mynewarray] = array

console.log(array1)
console.log(array2)
console.log(mynewarray)
