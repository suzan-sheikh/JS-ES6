//? Normal Function

// function nameOfFunction(){
//     return 10;
// }

// //? Arrow Function
// // let arrowFunction = () => {}

// let arrowFunction = () => 10;
// let singleParameter = input => input;

// let multiParameter = (input1, input2) => input1 + input2;

// // console.log(singleParameter(10))


// let multi = (a, b) => a+b;

// console.log(multi(10,10))

//? truthy and false value
//! falsy value
//! 1 falses
//! 2 0
//! 3 -0
//! 4 null
//! 5 "" emty String
//! 6 undefine 
//! 7 NaN

// ? ternary operator 

// var age = 10;
// var type = (age >= 18) ? "adult" : (age<=10) ? "yang" : "child";

// // console.log(type)

// let isLogin = false;
// let access = isLogin; 
// // console.log(access)

// //? Array.prototype.find()
// let number = [1, 2, 3, 4, 5, 6, 7];
// let result = number.find((i,ci,arr) => i >= 5);

// console.log(result);

// let number = [1, 2, 3, 4, 5, 6, 7];
// let result = number.filter(currentValue => currentValue > 4);
// [5,6,7]



// let result = number.find(function(i, ci, arr){
//     return i === arr[3],
//     fun2
// },fun2);

// let value = result;

// let fun2 = value => value === 4 ? "Yes": "no";
// console.log(result)
// // let fun2 = () => {}


    //? resutl => 6

// let number = [1, 2, 3, 4, 5, 6, 7];

// let result = number.splice(5, 1, 10, 10, "toamto", true);   


// let result2 = number.filter(i=>(i === true))

// console.log(typeof(number))

var numbers = [1,2,3,4,5,6,7,8,9];

var result = numbers.reduce((total, currentValue, previousValue)=>{
    return currentValue + previousValue;
},0) 

console.log(result)