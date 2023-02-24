// set (it is iterables) - page: 2

//example of set

const myarray =  [2,4,6,8,10,12,13]

//  ---> first method to add array in set
const set = new Set(myarray)     
console.log(set)

//  ---> second method to add array in set
const set1 = new Set()
set1.add(0)     
set1.add(2)     
set1.add(3)     
set1.add(4)     
set1.add(5)     
set1.add(5)        // --> you can't add 5 second time.
set1.add(myarray)  // --> you can add outer values.
set1.add(["this is set"])
set1.add(["this is set"]) //--> you can add same array second time because his values are store in diffrent location in memory.

console.log(set1)



//let's cheak number is in set or not ?


if(set1.has(1)){

    console.log("1 number is in set1" )
}else{
    console.log("1 number is not in set1.")
}



//let's check set1 is iterable or not?

for( let innerset of set1){

    console.log(innerset)
}
 // RESULT --> set1 is iterable.

 
 
//  where we set used ??

//--->  set is used when you have unique values (no duplicate values)