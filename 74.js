// optional chaining

 
const obj = {

    fname: "khushal",
    address: {pincode: 395004} 

}

console.log(obj.fname)  //--> we will get fname --> "khushal"
console.log(obj.address.pincode) //--> we will get pincode number --> 395004


//but what if i do like this


const obj1 = {

    fname: "khush",
    // address: {pincode: 395010} 

}

// you can see i have commented out the address
// now if i try print the address , we get an error.

// but i dont want to get an error i want undefined.


// console.log(obj1.address.pincode)  //--> we get an error 
console.log(obj1?.address?.pincode)  //--> we get an undefined 

// you have to add question mark before .
// this is optional chaning.
