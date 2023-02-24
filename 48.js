//lexical scope

// let's understand this topic by example
const exam = "fake";  //-----> this is a lexical scope of myapp() function

function myapp() {
  const myfunc0 = function () {
    // const exam = "fake2";

    const myfunc1 = () => {
      console.log("this is myfunc0", exam);    //----> here we aplied lexical scope
    };

    myfunc1();
  };

  myfunc0();
}

myapp();

//now understand what is lexical scope

//you can see in example there is a variable of (exam = "fake")
//this variable is a out of the function but still this variable print inside the (func0) function
//that means (exam = "fake") is in lexical scope
