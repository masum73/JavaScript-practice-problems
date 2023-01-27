//Module 18 - video practice - array declare 
var friendsAge = [21, 22, 34, 12, 18];
var actorNames = ['Tom', 'Hank', 'SRK'];
console.log(friendsAge);
console.log(actorNames);

// length of an array 
console.log(friendsAge.length);
console.log(actorNames.length);

// get element by array index
console.log(actorNames[0]);

//find index of an element 
var positionIndex = friendsAge.indexOf(12); // -1 will show if element doesn't exist in the array
console.log(positionIndex);

// set element to an array 
actorNames[2] = 'Cruise';
console.log(actorNames);

// push will add an element to it's last position in the array
var numbers = [12, 34, 45, 67];
//console.log(numbers);
numbers.push(619);
numbers.push(69);
//console.log(numbers);

// pop will remove an element to it's last position in the array
console.log(numbers);
numbers.pop();
console.log(numbers);

// unshift - will add an element to it's first position in the array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.unshift("Lemon", "Pineapple");
console.log(fruits);

// shift - will remove an element to it's first position in the array
fruits.shift()
console.log(fruits);

// comparison operator 
console.log(5 < 6); // less than
console.log(5 > 6); // greater than
console.log(5 == 6); // equal , === equal value and equal type 
console.log(5 == 5); //equal
console.log(5 != 6); // not equal , !== not equal value or not equal type 
console.log(5 != 5); // not equal

console.log(5 <= 6);
console.log(16 <= 6);
console.log(6 <= 6);

console.log(5 >= 6);
console.log(16 >= 6);
console.log(6 >= 6);

// multiple condition - add - && 
// money1 > money2 && result1 > result2

// multiple condition - or - || 
// money1 > money2 || result1 > result2

// if else - conditional decision
var iphonePrice = 79000;
var myBudget = 88000;

if(iphonePrice < myBudget){
    console.log("I will buy iphone")
}
else{
    console.log(" I will cry like a baby")
}

// if else - multiple conditions 
var isGraduated = true;
var salary = 50000; 
var car = 1; 

if( (isGraduated == true && salary >= 50000) || car >= 1){
    console.log("I will buy home");
} 
else{
    console.log("I will buy an Iphone watch");
}

// if - else if - else -> multi stage conditions and nested conditions

var money = 50; 
var danishPrice = 45; 
var butterBread = 35; 
var toastBiscuit = 20;

if(danishPrice < money) {
    console.log ('I will eat danish');
}
else if (butterBread < money){
    console.log('I will eat butter bread'); 
}
else {
    console.log('I will eat tea only');
}