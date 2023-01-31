// problem 1 - function calling within a function 
/*
function bar(){
    console.log('Bar');
}
function foo(){
    console.log('Foo');
    bar();
}
var callFoo = foo();
console.log(callFoo);
console.log('Problem 1 Completed');
*/

// problem 2 - average of 3 integer number - ( read global vs local var declaration ) 
/*
function make_avg(number1, number2, number3){
    var totalNumbers = number1 + number2 + number3;
    var averageNumber = totalNumbers / 3; 
    return averageNumber;
}

console.log(make_avg(10, 20, 30));
console.log('Problem 2 Completed');
*/ 

// problem 3 - average with array input and length
/*
function make_average(arrayNumbers, arrayLength){
    var sum = 0;
    for(i=0; i<arrayLength; i++){
        sum += arrayNumbers[i]; 
    } 
    var average = sum / arrayLength;
    return average;
}
console.log(make_average([10, 20, 30], 3));
console.log('Problem 3 Done');
*/ 

// problem 4 - odd even function - no return
/*
function odd_even(number){
    if( number % 2 == 0){
        console.log('Even') ;
    }else{
        console.log('odd') ;
    }
}
odd_even(11);
*/
// problem 4 - odd even function - has return
/*
function odd_even_return(number){
    if( number % 2 == 0){
        console.log('Even');
        return;
    }else{
        console.log('Odd');
        return;
    }
}
odd_even_return(24);
*/

// problem 5 - red green yellow - traffic signal 
/*
const signal = 'black';

switch(signal){
    case 'red': 
        console.log('You may be in danger');
        break;
    case 'yellow': 
        console.log('You should stop');
        break;
    case 'green': 
        console.log('You should stop');
        break;
    default:
        console.log('There is no such signal like that')
} 

*/ 