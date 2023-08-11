
function cubeNumber(number) {
    if (typeof number !== "number") {
        return 'Please provide me a valid number'
    }
    else {
        let result = number*number*number
        return result;
    }
}
console.log(cubeNumber(Ridoy))


// 222222222222222222222
// function matchFinder(string1, string2) {
//     if(typeof string1 !== 'string' || typeof string2 !== 'string' ){
//         return 'Please provide me String'
//     }
//     else if(string1.includes(string2)){
//          return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(matchFinder('John Doe', 'deo'));


// 3333333333333333333333333333333333333
// function sortMaker(...numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (typeof numbers[0] !== "number" || typeof numbers[1] !== "number" || numbers[i] < 0) {
//             return 'Invalid Input Index';
//         }
//     }
//     if (!Array.isArray(numbers)) {
//         return 'Please provide me an array';
//     }
//     else if (numbers[0] === numbers[1]) {
//         return 'Equal';
//     }
// else {
//     if (numbers[0] < numbers[1]) {
//          let  temp = numbers[0];
//          let result1 =  numbers[0] = numbers[1];
//         let result2 =   numbers[1] = temp;
//         return numbers;
//     }
// }
// }
// let numbers = [2];
// let result = sortMaker(numbers);
// console.log(result);


// 4444444444444444444444444444444444444444
// function findAddress(obj) {
//     if( typeof obj !== 'object'){
//         return 'Please provide me an Object'
//     }
//     if (!obj.street) {
//         obj.street = '__';
//     }
//     if (!obj.house) {
//         obj.house = '__';
//     }
//     if (!obj.society) {
//         obj.society = '__';
//     }
//     return obj.street + ', ' + obj.house + ', ' + obj.society;
// }
// var obj = {
//     street: 10,
//     house: "15A",
//     society: "Earth Perfect",
// };
// const result = findAddress(obj);
// console.log(result);


// 5555555555555555
// function canPay(changeArray, totalDue) {
//     if (!Array.isArray(changeArray)) {
//         return 'Provide me an array as input';
//     }
//     if (changeArray.length === 0) {
//         return 'The first element is an empty array';
//     }
//     let sum = 0;
//     for (let i = 0; i < changeArray.length; i++) {
//         sum += changeArray[i];
//     }
//     if (sum >= totalDue) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let arr = [1, 2, 3];
// let total = 10;
// let result = canPay(arr, total);
// console.log(result);







// function canPay(changeArray, totalDue) {
// if( !Array.isArray(changeArray)){
//     return 'Provide me an array';
// }
// else if( changeArray.length === 0){
//     return 'The first element is an empty array';
// }
// let sum = 0;
// for(let i=0; i<changeArray.length; i++){
//     sum = sum + changeArray[i];
// }

// if(sum>=totalDue){
//     return true;
// }
// else{
//     return false;
// }
// }
// let arr = [7, 2, 3];
// let total = 10;
// let result = canPay(arr, total);
// console.log(result);

