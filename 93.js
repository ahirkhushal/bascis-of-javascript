// static method and properties

class person {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }

  set fullname(fullname) {
    const [firstname, lastname] = fullname.split(" ");
    this.firstname = firstname;
    this.lastname = lastname;
  }

  static newmet() {
    return "this is static method";
  }

  static prop = "this is static property";

  eat() {
    return `${this.firstname} is eating`;
  }

  iscute() {
    return true;
  }

  issupercute() {
    return this.age <= 1;
  }
}

const person1 = new person("khushal", "ahir", 18);
console.log(person1);

// i want to call eat method
console.log(person1.eat());
// i can call method using person1 object.

//------------------------------------------------------------------//|
// but i want to call method using person class                     //|
// so there will we use static method                               //|
// lets see                                                         //|
console.log(person1.newmet); // error                               //|--> static method
console.log(person.newmet()); // we will got result                 //|
//                                                                  //|
// static method works when we call methods using their class       //|
//------------------------------------------------------------------//|

//-------------------------------------------------//|
// static properties is same like static method    //|
console.log(person1.prop); //error                //|--> static peroperties
console.log(person.prop); //works                 //|
//-------------------------------------------------//|
