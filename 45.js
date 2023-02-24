// lets do some example of function declaration / function expression / arrow functions


//task:= 
//create function
//input := array , target number
//output := index of target number who is in array.



//1) function declaration method

function output(array, target){

    for(let i = 0; i < array.length; i++){
        if(target === array[i]){
            return `this number is in ${i}th index..`
        }
    }
        return `${target} number is not in array..!!`
}

const myarray = [1,2,3,4,5,6,7,8,9,10]

console.log(output(myarray , 5))



//2) function expression method


const OutpuTt = function(array, target){

    for(let i = 0; i < array.length; i++){
        if(target === array[i]){
            return `this number is in ${i}th index..`
        }
    }
        return `${target} number is not in array..!!`
}

const Myarray = [1,2,3,4,5,5,7,6,8,9,10]

console.log(OutpuTt(Myarray , 6))



//3) arrow function method



const OutPut = (array, target) => {

    for(let i = 0; i < array.length; i++){
        if(target === array[i]){
            return `this number is in ${i}th index..`
        }
    }
        return `${target} number is not in array..!!`
}

const MyArray = [1,7,2,3,4,5,6,,8,9,10]

console.log(OutPut(MyArray , 7))

