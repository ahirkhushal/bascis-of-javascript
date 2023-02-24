//rest parameters

const sum = function (
  ...numbers //------> this (...numbers) is rest parameters
  ) {
  let total = 0;
  for (let number of numbers) {
    total = total + number;
  }
  return total;
};

const final = sum(1, 2);
console.log(final);


// rest perameter convert the arguments value into array