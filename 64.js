// some mehtod


// this method is opposite of every method

// everymethod -- give true if all conditions are true otherwise gives false
// some mehtod -- give true when atlist one of the conditions is true otherwise give false

// lets understand with example

const numbers = [1,5,3,8,9]

const ans = numbers.some((number) => number % 2 === 0)

console.log(ans)

// explain the example

// const numbers = [1,5,3,8,9]  --> ans is true because in array 8 is follow the condition.
// const numbers = [1,5,3,7,9]  --> ans is false because in array no one follow the condition.


// real life example



const products = [

    {productno : 1 , productname : "fridge" ,        productprice : 50000},
    {productno : 2 , productname : "TV" ,            productprice : 35000},
    {productno : 3 , productname : "washingmachine", productprice : 40000},
    {productno : 4 , productname : "mobile" ,        productprice : 12000},
    {productno : 5 , productname : "laptop" ,        productprice : 44000},
    {productno : 6 , productname : "robot" ,         productprice : 150000},
    {productno : 7 , productname : "istri" ,         productprice : 2000}

]

// task
// i want to check if any of these product are priced above 100000

const ans1 = products.some((product) => product.productprice > 100000 )
console.log(ans1)


// ans is true because robot price is above 100000