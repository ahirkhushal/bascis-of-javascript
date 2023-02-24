// every method

// every method gives boolean values

// when every conditions are right than every method gives --> true  
// when one of the condition are false than every method gives --> false

const numbers = [2,4,6,8,10]

const ans = numbers.every((number) => number % 2 === 0)

console.log(ans)

// numbers = [2,4,6,8,10] ---> true   --> because all numbers which is in array is following the conditon
// numbers = [2,4,6,9,10] ---> false  --> because in array 9 number is odd which is not following the condition.


//real life example


const products = [

    {productno : 1 , productname : "fridge" ,        productprice : 50000},
    {productno : 2 , productname : "TV" ,            productprice : 35000},
    {productno : 3 , productname : "washingmachine", productprice : 40000},
    {productno : 4 , productname : "mobile" ,        productprice : 12000},
    {productno : 5 , productname : "laptop" ,        productprice : 44000},
    {productno : 6 , productname : "robot" ,         productprice : 150000},
    {productno : 7 , productname : "istri" ,         productprice : 2000}

]


// our task
// product price < 160000 

const ans1 = products.every((product) => product.productprice < 160000);
console.log(ans1);


// highest price of productprice is 150000 
// if we put condition -->  product.productprice < 140000 --> false
// if we put condition -->  product.productprice < 160000 --> true

//inshort we must put condition  ( > 150000 )  --> as per productprice