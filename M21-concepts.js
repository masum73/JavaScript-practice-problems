// inch to feet 
/*
function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const myInches = 144; 
const myFeet = inchToFeet(myInches);
console.log(myFeet);
*/
// miles to kilometer
/* 
function milesToKilometer(miles){
    const kilometer = miles * 1.60934; 
    return kilometer;
}

const myMiles = 24.55; 
const myKilometer = milesToKilometer(myMiles);
console.log(myKilometer.toFixed(2));
*/
// even odd
/* 
function isEven(number){
    const remainder = number % 2;
    if( remainder === 0){
        return true;
    }else{
       return false;
    }
}

const checkNumber =  isEven(12);
console.log(checkNumber);

const checkMyNumber = isEven(13);
console.log(checkMyNumber);
*/
// leap year - without return
/*
function findMyLeapYear(year){
    const remainder = year % 4;
    if (remainder === 0){
        console.log('it is leap year');
    } else{
        console.log('Not Leap Year');
    }

}

findMyLeapYear(1960); 
*/
// leap year - with return - simple way 
/*
function findLeapYear(year){
    const remainder = year % 4;
    if (remainder === 0){
        return true;
    } else{
        return false;
    }

}
const myYear = findLeapYear(1960);
console.log(myYear); 
*/

// leap year - with return - full logic way 
/*
function leapYear(year){
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

const checkLeapYear = leapYear(1960);
console.log(checkLeapYear);

*/

// find odd sum function
/*
function getSumOfAnArray(numbers){
    let sum = 0; 
    for(let i=0; i < numbers.length ; i++){
        const index = i; 
        const element = numbers[index];
        sum = sum + element; 
        //console.log(index, element, sum);
    }
    return sum;
}

function getOddNumbersOfAnArray(numbers){
    const oddNumbers = [];
    for( let i=0; i < numbers.length ; i++){
        const index = i; 
        const element = numbers[index];
        if(element % 2 !== 0){
            //console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [10,11,20,23,30,45];
const myOddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(myOddNumbers);
const mySumNumbers = getSumOfAnArray(myOddNumbers);
console.log(mySumNumbers);

*/

// Summation using a loop
/*
1+2+3+4+5+6+7
function sumOfNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
        //console.log(i, sum);
    }
    return sum; 
}

const sumNumbers = sumOfNumbers(7);
console.log(sumNumbers);

*/ 
// multiplication using a loop - factorial fancy name
/* 1*2*3*4*5*6*7 --- 3! - 3*2*1 - 3 factorial
straight factorial 
function factorial(number){
    let result = 1; 
    for( let i=1; i<=number; i++){
        result= result * i;
    }
    return result;
}
const myMulti = factorial(7);
console.log(myMulti);
*/ 

// reverse factorial 
/*
function factorial(number){
    let result = 1; 
    for( let i=number; i >= 1; i--){
        result= result * i;
    }
    return result;
}
const myMulti = factorial(7);
console.log(myMulti);
*/