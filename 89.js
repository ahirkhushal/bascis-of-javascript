// super class

// super class used in class
// you can see in example bird class extends animal 
// that means animal class's constructor copied in bird class
// but i want to add bird's speed in bird class 
// so there will we use super
// lets see

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

// i want to add speed of bird in bird class
// but i have to take everything else from the constructor of animal class
// then we can use super


class bird extends animal {

    constructor(name , age, speed){
       super(name, age)     //--> super()  --> super takes all the values of animal class's constuctor-- > this.name ,this.age
       this.speed = speed
    }

    run(){
        return `peacock bird's speed is ${this.speed}kmph`
    }
}

const peacock = new bird("peacock", 1 , 45 );
console.log(peacock);
console.log(peacock.run());
console.log(peacock.eat());
console.log(peacock.iscute());
console.log(peacock.issupercute());
