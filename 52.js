// parameters destructuring 

//use in - objects / react




//object
const myobj =  {
    name:"khushal",
    gender: "male",
}



// normal function

function myfunc(obj){

    console.log(obj.name)
    console.log(obj.gender)
}



//parameter destructuring


function myfunc({name, gender}){

    console.log(name)
    console.log(gender)

}


myfunc(myobj)

