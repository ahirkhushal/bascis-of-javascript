//object desturcturing

const obj = {
  name: "khushal",
  age: 18,
  hobby: ["taekwondo"],
  name2: "AYUSH KAVAD",
  "school end year": "28/9/2021",
};

//first method

const NAME1 = obj.name;
console.log(NAME1);

//destructuring method

const { name, age: FAME, hobby: GAME, ...OTHER } = obj;

console.log(name);
console.log(FAME);
console.log(GAME);
console.log(OTHER);
