//how to iterate[repeat] objects

const obj = {

    name: "ayush",
    age: 17,
    "my fav hobby": ["taekwondo"]
}

// there is a two ways to iterate objects
//1) for in loop
//2) objects.keys-for of loop


//1) for in loop

for(let key in obj){

    //normal print
    // console.log(key)

    // obj[key] defines that key values
    //  console.log(obj[key])

    // i want same print like obj
    // console.log(key, ":" , obj[key])

}

//2) objects.keys - for of loop

console.log(Object.keys(obj))
console.log(Array.isArray(Object.keys(obj)));

for(let key of Object.keys(obj)){

  
    console.log(key, ":", obj[key])

}