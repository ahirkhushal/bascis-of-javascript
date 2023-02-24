//hoisting 

//lets understand with example

//here we take a function declaration's example

hello()

function hello(){
    console.log("hello world...!!")
}

//so in this example we can call function before code as you can see in function declaration's example.


//but this is work only in function declaration 


//-----------------------------------------------------------------------



//lets cheak this in function expression

Hello()

const Hello = function(){
    console.log("hello world")
}

//so there we can see error because in function expression and arrow function we cannot call function before code.