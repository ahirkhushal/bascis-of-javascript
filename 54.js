// function returning function

function myfunc(){

    function hello(){
       console.log("this is hello function")
    }

    return hello;
   
}

const ans = myfunc();
console.log(ans);

ans();

//myfunc ----> that means function
//myfunc()----> that means inside the function

// ans ---->that means function
//ans() ----> that means inside the function 


// understanding of example



// const ans = myfunc()

// ans = inside the myfunc function
//            |
//            |
//            |
//   output   ====>>>       f hello(){
//                                return "this is hello function"
//                              }
   


// now 

// ans = myfunc() = hello

//it means ----> ans = hello
//it means ----> ans() = hello()


// ans() ----> inside the ans function
//hello()  ---> inside the hello function


// soo, when we enter --> ans() --> then program run the value inside the hello functions
//                                     |
//                                     |
//                                     |
//             output                  ====>>    this is hello function  

