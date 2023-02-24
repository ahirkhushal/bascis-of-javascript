// Map objects - page : 2

//realistic example

const obj1 = {

    id : 1,
    name : "khushal"
}

const obj2 = {

    id : 2,
    name : "dharmi"
}

// here is a object
// i want to add additional information in object but using Map object

//in short i want to add extra information but not in object ,  in Maps objets.
//so lets make Map

const extrainfo = new Map()


//add value  (key  ,   values)
extrainfo.set(obj1 , {age: 18 , gender: "male"})
extrainfo.set(obj2 , {age: 17 , gender: "female"})


console.log(obj1)
console.log(obj1.id)
console.log(obj1.name)


console.log(obj2)
console.log(obj2.id)
console.log(obj2.name)


console.log(extrainfo.get(obj1))
console.log(extrainfo.get(obj1).age)
console.log(extrainfo.get(obj1).gender)


console.log(extrainfo.get(obj2))
console.log(extrainfo.get(obj2).age)
console.log(extrainfo.get(obj2).gender)


// so finally we add some extra value of objects in Maps object..