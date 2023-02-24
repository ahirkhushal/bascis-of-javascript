//sort method - 1st page

//what is sort method ? let's understand this merhod with small example

//------------------------------------------------
//                                              //|
//cosnt numbers = [500,100,1200,4500,3000]      //|
//                                              //|
// i have a array of this numbers               //|---> UNDERSTANDING OF SORT METHOD
// i want to sort this number in low to high    //| 
// like this [100,500,1200,3000,4500]           //|
// let do it with real                          //|
//                                              //|
//------------------------------------------------



const numbers = [500,100,1200,4500,3000]

numbers.sort()

console.log(numbers)


//EXPECTED RESULT ---> [100,500,1200,3000,4500]
//FINAL RESULT ---> [100, 1200, 3000, 4500, 500]

//there is a unexpected result... why???


// so program read this numbers as a string

//like

// ["500","100","1200","4500","3000"]


// so first of all you need to learn about asci value
//program apply asci value in numbers and string and after then convert in sort

//-------------------------------------------------
//                                              //|
//           LETS EXPLAIN EXAMPLE               //|
//                                              //|
// ["500","100","1200","4500","3000"]           //|
// YOU NEED TO FIND ASCI VALUE OF FIRST LETTER  //|
// LIKE 500 = 5'S ASCII VALUE = 53              //|
//                                              //|----> explaination of result
// ["500","100","1200","4500","3000"]           //|
// [ 53,    49,    49,    52,    51 ]           //|
// now set low to high values                   //|
//                                              //|
// [49,49,51,52,53]                             //|
// [100,1200,3000,4500,500]  ---> RESULT        //|
//                                              //|
//-------------------------------------------------


//NOW IF YOU WANT THAT RESULT ---> [100,500,1200,3000,4500]
// GO TO THE FILE NO. ----> 60.JS


//ASCII VALUES 

// a    097        A    065 		// 0    48  		// 0 - 31   Control characters (see below)			
// b    098        B    066 		// 1    49  		// 32  space			
// c    099        C    067 		// 2    50  		// !    33  			
// d    100        D    068 		// 3    51  		// "    34  			
// e    101        E    069 		// 4    52  		// #    35			
// f    102        F    070 		// 5    53  		// $    36			
// g    103        G    071 		// 6    54  		// %    37  			
// h    104        H    072 		// 7    55  		// &    38  			
// i    105        I    073 		// 8    56  		// '    39  			
// j    106        J    074 		// 9    57  		// (    40			
// k    107        K    075 		// :    58  		// )    41			
// l    108        L    076 		// ;    59  		// *    42			
// m    109        M    077 		// <    60  		// +    43  			
// n    110        N    078 		// =    61  		// ,    44			
// o    111        O    079 		// >    62  		// -    45  			
// p    112        P    080 		// ?    63  		// .    46  			
// q    113        Q    081 		// @    64		    // /    47			
// r    114        R    082 							
// s    115        S    083 		// [    91  		// {    123 			
// t    116        T    084 		// \    92  		// |    124 			
// u    117        U    085 		// ]    93  		// }    125 			
// v    118        V    086 		// ^    94		    // ~    126			
// w    119        W    087 		// _    95					
// x    120        X    088 		// `    96  					
// y    121        Y    089 							
// z    122        Z    090 							
