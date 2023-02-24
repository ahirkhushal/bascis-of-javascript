//important array method
//reduce


const numbers = [1,2,3,4,5,10]


// normal example to understand reduce

//reduce  methods use in doing total of numbers

const myfunc = function(number , curruntnumber){
    return number + curruntnumber;
}

const final = numbers.reduce(myfunc,15) //---> this (myfunc,15) --> 15 is value which starts as a first value 
console.log(final)


// how it works
 
//number                                                   +                  curruntnumber                  =      return     
// 15(add in final veriable) (numbers.reduce(myfunc,15))                       1 (first  value of numbers)            16
// 16(return value)                                                            2 (second value of numbers)            18
// 18                                                                          3                                      21
// 21                                                                          4                                      25
// 25                                                                          5                                      30 
// 30                                                                          10                                     40  = total

// this is how reduce method works


//2nd real life example

const cart = [ 
    {productnumber : 1 , productname : "TV" , productprice : 10000},
    {productnumber : 2 , productname : "fridge" , productprice : 12000},
    {productnumber : 3 , productname : "mobile" , productprice : 15000}
]

//now to make total of this productprices using reduce method



//1st  reduce method

const sumsofcart = function(productprice , productcurruntprice){

    return productprice + productcurruntprice.productprice;

}

const final1 = cart.reduce(sumsofcart,0)
console.log(final1)


//2nd  reduce method

const final12 = cart.reduce((productprice , productcurruntprice) => {

    return productprice + productcurruntprice.productprice;
},1);

console.log(final12)




//how its works

//productprice                                               +     productcurruntprice             =                              return     
                                                                                                                                    
// 0(add in final1 veriable) (cart.reduce(sumsofcart,0))           10000 (first  value of productcurruntprice.productprice)       10000
// 10000(return value)                                             12000(second value of  productcurruntprice.productprice)       22000
// 22000                                                           15000                                                          37000 = total
