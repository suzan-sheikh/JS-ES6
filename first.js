
//! 1. Truthy and Falsy Value => 7 type of false value like 

//* 0, -0, false, null, undefine, NaN, "", total = 7
var value = "";
let result = value ? "truthy value" : "false value";
console.log(result);

//*------------------------------------------------------------------------------*//

//! 2. Ternary Operator => condition ? True Result : False Result

let input = false;
let inputChecker = input === true ? "correct input" : "false input";
console.log(inputChecker);

//*------------------------------------------------------------------------------*//

//! 3. Arrow find() Method => array.find(callbackFun(currentValue, Index, Array), thisValue);  → "একটা খুঁজে দাও"

let newArray = [1,3,5,9,90,12,20,50];
let findResult = newArray.find(item => item >= 12);
console.log(findResult);

//*------------------------------------------------------------------------------*//

//! 4. Arrow filter() Method => array.filter(callbackFun(currentValue, Index, Array), thisValue); → "সবগুলো খুঁজে দাও"

let newFilter = [10,20,60,30,80,100,1111];
let filterArray = newFilter.filter(item => item <= 100);
console.log(filterArray);

//*------------------------------------------------------------------------------*//

//! 5. array.slice(start, end) 

let sliceArray = ["Mango", "Banana", "Apple", "Watermelon", "grave"];
let sliceResult = sliceArray.slice(1, 4);
console.log(sliceResult);

//*------------------------------------------------------------------------------*//

//! 6. array.splice(index, count, item1, ....., itemX)

let spliceArray = ["Mango", "Banana", "Apple", "Watermelon", "grave"];
let inputArray = ["Orange", "Mango", "Banana"];
let spliceResult = spliceArray.splice(2, 3, ...inputArray);
console.log(spliceResult);
console.log(spliceArray);

//*------------------------------------------------------------------------------*//

//! 7. array1.concat(array2, array3, ..., arrayX)   || ar

let firstArray = ["Mango", "Banana", "Apple", "Watermelon", "grave"];
let secondArray = ["Orange", "papaya", "Banana"];
let thirdArray = ["keyboard", "home", "mouse"];
let concatResult = firstArray.concat(secondArray, thirdArray);
console.log(concatResult);

