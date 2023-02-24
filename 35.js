//deffrence between dot and bracket notation 

//dot notation

const dot = {
    name: "khushal",
    age: 18,
    hobbies: [ "sports", "siging", "traveling"]
}

    console.log(dot)

    //dot(.)use

    console.log(dot.age);
    console.log(dot.name);
    console.log(dot.hobbies);


    //bracket notation

const brac = {
    name: "mohit",
    age: 52,
    hobbies: [ "cricket", "dance", "pizza"]  

} 
console.log(brac)

//bracket[] use

console.log(brac["name"])
console.log(brac["age"])
console.log(brac["hobbies"])

//diffrence between dot and bracket notation


const key = "email"

const obj = {

    name: "ayush",
    age: 17,
    hobbies: [ "cric", "dan", "piz"],
   "my fav hobby" : ["taekwondo"]
}

console.log(obj["my fav hobby"])

obj[key] = "khushalahir559@gmail.com"
console.log(obj)

obj["khushal"] = 1




