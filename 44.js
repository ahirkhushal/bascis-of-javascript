//arrow functions

//1)
//this is function expression's example
const mynameiskhushal = function () {
  console.log("khushal is 18 year old... ==> `function expression` ");
};

mynameiskhushal();

//arrow function example
//ok so here we remove the function and we will add arrow after breacket
//this example is a copy of 1st example you can see diffrence between function expression and arrow function

const mynameisKhushal = () => {
  console.log("khushal is 18 year old... ==> `arrow function`");
};

mynameisKhushal();

//------------------------------------------------------------------

//shortcut method of arrow function

//2)
//we can write more short arrow function
//for example

//this is normal code of arrow functions
const iseven = (numbers) => {
  return numbers % 2 === 0;
};

console.log(`${iseven(5)}  => normal code of arrow function`);

//short code of arrow function
const Iseven = (numbers) => numbers % 2 === 0;

console.log(`${Iseven(6)}  => short code of arrow function`);
