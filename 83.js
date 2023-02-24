// prototype

// A FUNCTION IN JS IS A FUNCTION BUT IN JS IS ALSO AN OBJECT
// it means you can treat functions like objects.


// when we created a function , the fucntion gives us an empty object which is called prototype 
// and in this empty object we can add key value pair
// prototype is only work in function

// lets see



function hello(){

    console.log("hello world")
}

hello();

console.log(hello.name)  // --> we use this method in objetcs

// now i want to add key value pair in function 

hello.key1 = "value1"// --> this value added in empty object of function which is called prototype

console.log(hello.key1)
console.log(hello.prototype)




// you can add key value pair in prototype

hello.prototype.key2 = "value2"
console.log(hello.prototype)