//important array method
//filter


// lets understand this method by odd even example


const numbers = [1,3,5,7,9,5,2,8464684864,53,468468,48,6]

//1st method
const iseven = function(number){
    return number % 2 === 0;
}

const ans = numbers.filter(iseven)
console.log(ans); 




//2nd method
const ansr = numbers.filter((number) => {
    return number % 2 === 0;
})
console.log(ansr);


//in this example filter method filter the odd or even's value as per condition.