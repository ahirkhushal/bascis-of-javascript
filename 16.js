// and or operator

let age = 1;
let name = "DHARMI";




//NORMAL EXAMPLE

if(age > 18){
    console.log("your age is above 18")
    
}else{
    console.log("your age is not 18 now.")
    
}





//AND EXAMPLE

if(age >18 && name[0] === "D"){

    console.log("your name starts with letter D and you age is above 18.")
}else{
    console.log("your age is not 19 or your name is not starts with D")
}





//OR EXAMPLE

if(age >18 || name[0] === "D"){

    console.log("your name starts with letter D and you age is above 18.")
}else{
    console.log("your age is not 19 and your name is not starts with D")
}
