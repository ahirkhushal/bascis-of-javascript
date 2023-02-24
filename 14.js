//nested if else

//let's make game

let winnumber = 2;
let yourvalue = +prompt("GUESS A NUMBER")



if(yourvalue === winnumber){

    console.log("you win the game.")

}else{ if(yourvalue < winnumber){
    console.log("too low!!")

}else{
    console.log("too high!!")
}

}

