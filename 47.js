//functions inside function


const firstf = function(){

    const secondf = function(){
        console.log("my name is secondf..!!")
    }

    function thirdf(num1,num2){
       return num1 + num2
    }

    const fourthf = (num1,num2) => {
        return num2 - num1
    }

    const fifthf = (num1,num2) => {
        return num1 * num2
    }

    const sixthf = (num1,num2) => {
        return num1 % num2
    }

    console.log("my name is firstf")
    secondf()
    console.log(thirdf(2,3))
    console.log(fourthf(2,3))
    console.log(fifthf(2,3))
    console.log(sixthf(2,5))

}

firstf()