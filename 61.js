//sort method - 3rd page 

//lets make real life example

// in flipcart you see electronic product and you want low price to high price product 
// use sort method for convert product price low to high

const products = [
    {productno : 1 , productname : "fridge" ,        productprice : 50000},
    {productno : 2 , productname : "TV" ,            productprice : 35000},
    {productno : 3 , productname : "washingmachine", productprice : 40000},
    {productno : 4 , productname : "mobile" ,        productprice : 12000},
    {productno : 5 , productname : "laptop" ,        productprice : 44000},
    {productno : 6 , productname : "robot" ,         productprice : 150000},
    {productno : 7 , productname : "istri" ,         productprice : 2000}
]

const final = products.slice(0).sort((a,b) => {
 return a.productprice - b.productprice
})
console.log(products)
console.log(final)

