//find method

// find method is use for find something

// for example 

const myarray = ["hello" , "khushal", "dharmi"]

const final = myarray.find((string) => {

    return string.length === 6;

});

console.log(final)


//this is the example of find method

//------------------------------------------------------------------

//let's do the example of real life use

const array = [
    {userid:1, username: "khushal"},
    {userid:2, username: "dharmi"},
    {userid:3, username: "love"},
    {userid:4, username: "care"}
]
const abc = (user) => {
    return user.userid === 2 
}

const ans = array.find(abc);

console.log(ans)

// you can print those value you want to use of find method