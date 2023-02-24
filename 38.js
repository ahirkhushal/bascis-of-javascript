//spread operator

//spread operator in array - example

const a1 = ["khushal", "ayush"];
const a2 = ["ayush's 1", "khushal's 2"];

const newa = [...a1, ...a2, "a", "b", "c", "d", "e"];

console.log(newa);

//spread operator in objects - example

const obj1 = {
  key1: "value1",
  key2: "value2",
};

const obj2 = {
  key3: "value3",
  key4: "value4",
};
const obj3 = { khushal: 1 };

const totalobj = { ...obj1, ...obj2, ...obj3 };

console.log(totalobj);
