// callback functions



function func(callback){

    console.log(callback);
    callback();
    
}



function func2(){

    console.log("this is func 2")
}




func(func2);


//explanantion
// here we murged func2 in the callback ----> func(func2) = func(callback) = func2=callback
//after this when we call callback there will autometically print func2 function.
// here we can call this is callback function.