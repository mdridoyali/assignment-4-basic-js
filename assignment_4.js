
function cubeNumber(number) {
    if (typeof number !== "number") {
        return 'Please provide me a valid number'
    }
    else {
        let result = number*number*number
        return result;
    }
}


function matchFinder(string1, string2) {
    if(typeof string1 !== 'string' || typeof string2 !== 'string' ){
        return 'Please provide me String'
    }
    else if(string1.includes(string2)){
         return true;
    }
    else{
        return false;
    }
}


function sortMaker(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[0] !== "number" || typeof numbers[1] !== "number" || numbers[i] < 0) {
            return 'Invalid Input Index';
        }
    }
    if (!Array.isArray(numbers)) {
        return 'Please provide me an array';
    }
    else if (numbers[0] === numbers[1]) {
        return 'Equal';
    }
else {
    if (numbers[0] < numbers[1]) {
         let  temp = numbers[0];
         let result1 =  numbers[0] = numbers[1];
        let result2 =   numbers[1] = temp;
        return numbers;
    }
}
}



function findAddress(obj) {
    if( typeof obj !== 'object'){
        return 'Please provide me an Object'
    }
    if (!obj.street) {
        obj.street = '__';
    }
    if (!obj.house) {
        obj.house = '__';
    }
    if (!obj.society) {
        obj.society = '__';
    }
    return obj.street + ', ' + obj.house + ', ' + obj.society;
}



function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray)) {
        return 'Provide me an array as input';
    }
    if (changeArray.length === 0) {
        return 'The first element is an empty array';
    }
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        sum += changeArray[i];
    }
    if (sum >= totalDue) {
        return true;
    } else {
        return false;
    }
}
