// functions

// function is like our servent we have to give them work and he will do that work.

//function declaration:----

//create function
//normal output

function mynameiskhushal() {
  console.log("khushal is a man...");
}

mynameiskhushal();

//create function
//sum of two numbers

function sum(number1, number2) {
  return number1 + number2;
}

const short = sum(5, 6);
console.log(short);

//create function
//input :  number
//output : if the number is even :true  / else false

//in this function you can use if else condition

function iseven(numbers) {
  return numbers % 2 === 0;
}
console.log(iseven(5));

//create function
//input: string
//output: first letter

function letter(string) {
  return string[0];
}

console.log(letter("khushal"));

//create function
//input : array , target number
//output : if target number is in the array then print the index of target number who stored in array.

function indexprint(array, targetnumber) {
  for (let i = 0; i < array.length; i++) {
    if (targetnumber === array[i]) {
      return i;
    }
  }
  return -1;
}

console.log(indexprint([4, 5, 54, 6, 4], 54));
