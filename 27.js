//how to clone arrays

//how to concatenate two arrays

let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["item3", "item4"])
// let array2 = [].concat(array1, ["item3", "item4"]);
let array2 = [...array1, "item3", "item4"];

// array1.push("item3", "item4")

// console.log(array1===array2);
// console.log(array1)
console.log(array2);

// methods you can use for clone arrays

//directly           ---> line no :- 07
//slice              ---> line no :- 08
//concate            ---> line no :- 09
//spread operator    ---> line no :- 10
