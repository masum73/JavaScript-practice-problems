// Module 18 - Practice problem 1 - index and replace of an element of an array

var fruits = ['Apple' , 'Banana' , 'Orange'];

var bananaIndex = fruits.indexOf('Banana');
console.log(bananaIndex);

fruits[1] = 'Mango';
console.log(fruits);

//  Module 18 - Practice problem 2 - marks grading

var marks = 33; 

if(marks >= 80){
    console.log("Your grade is A and you mark is " + marks)
}else if(marks >= 60){
    console.log("Your grade is B and you mark is " + marks)
}else if(marks >= 50){
    console.log("Your grade is C and you mark is " + marks)
}else if(marks >= 40){
    console.log("Your grade is D and you mark is " + marks)
}else {
    console.log("Your grade is F and you mark is " + marks)
}

// Module 18 - Practice problem 3 - largest number

var number1 = 13; 
var number2 = 79;
var number3 = 45; 

if(number1 > number2 && number1 > number3){
    console.log('Largest Number ' + number1);
}else if(number2 > number3 && number2 > number1){
    console.log('Largest Number ' + number2);
}else{
    console.log('Largest Number ' + number3)
}

//Module 18 - Practice problem 4 - triangle isosceles or not

var side1 = 9; 
var side2 = 8; 
var side3 = 9; 

if(side1 == side2 || side1 == side3 || side2 == side3){
    console.log('The triangle is isosceles');
}else{
    console.log('The triangle is not isosceles');
}