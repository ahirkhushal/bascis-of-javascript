// some example of class

class animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }

  iscute() {
    return true;
  }

  issupercute() {
    return this.age <= 1;
  }
}

const cat = new animal("tom", 1);
console.log(cat);
console.log(cat.eat());
console.log(cat.iscute());
console.log(cat.issupercute());

//2) second example same as animal class

class smallanimal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }

  iscute() {
    return true;
  }

  issupercute() {
    return this.age <= 1;
  }
}


const rat = new smallanimal("jerry", 1);
console.log(rat);
console.log(rat.eat());
console.log(rat.iscute());
console.log(rat.issupercute());



// you can see both class are same only class name are diffrent
// when both class are same than you can do also like that

class bird extends animal {

}


const peacock = new bird("peacock", 1);
console.log(peacock);
console.log(peacock.eat());
console.log(peacock.iscute());
console.log(peacock.issupercute());

// when you use (class bird extends animal) 

// bird class copy all inputs of animal class in their class.