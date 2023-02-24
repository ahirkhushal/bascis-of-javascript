//important array method
//map

const numbers = [2,4,5,6,7] 


// 1st method to use map
const square = function (number){

     return number * number
}
console.log(numbers.map(square));    // map always makes array 



//2nd method to use map
console.log(numbers.map(function(number){
    return number * number;
}));


//3rd and realistic method


const myobj = [
    {usename : "khushal" , age: 18},
    {usename : "dharmi" , age: 17},
    {usename : "garima" , age: 19}
]

const final = myobj.map((user) => {
    return user.usename
});

console.log(final)