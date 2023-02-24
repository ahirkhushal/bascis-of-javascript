// [[prototype]]
// [[prototype]]  === __proto__
 
const obj1 = {

    key1: "value1",
    key2: "value2"
    
}

const obj2 = {

    key3: "value3"
}


console.log(obj2.key3)


console.log(obj2.key1)
// here we get an undefined because key1 is not in obj2.

// but what i want is when i print (obj2.key1) if the value of key1 is not in obj2 then it will find me from obj1.

//inshort 

// agr mujhe key1 ki value obj2 me nahi mill rahi to mujhe obj1 mai se key1 ki value lake de


const obj3 = Object.create(obj1)
obj3.key4 = "value4"

console.log(obj3)
console.log(obj3.key4)
console.log(obj3.key1)  // now you can see output.

//Object.create() makes [[prototype]]
//obj1 === obj3.[[prototype]]   or   obj.__proto__
// it means when if some values are not in obj3 then it will be find from obj1 
 