// function declare 
/* function startFan(){
    console.log('Start Fan');
} 

// call the function

startFan(); */

// parameter function 

/* function bringFood(money){
    console.log('Bring the food');
    console.log(money);
} 

bringFood(100); // direct value

var taka = 100;

bringFood(taka); */ // indirect variable value

//  multiple parameter function

/* function add (num1, num2){
    console.log('two numbers are: ', num1, num2 );
}

add(5, 10); */

// return of function 

/* function addNumbers(number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
   //console.log(sum);
   return sum;
}

//addNumbers(5, 5);

var total = addNumbers(10, 20);
console.log('total', total); */ 

/* function bringBurger(money){
    var burgerPrice = 100;
    var quantity = money / burgerPrice; 
    return quantity;
}

var myMoney = 400;
var burger= bringBurger(myMoney);
console.log('Eating burgers:', burger); */ 

/* function getAverage(assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1Marks = 60;
const assignment2Marks = 58;
const assignment3Marks = 59;

var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log('My assignment average marks:', myAverage); */ 

/*function add(num1, num2){  // parameter
    const sum = num1 + num2;
    return sum;
}

const result1 = add(12, 13); // arguments
const result2 = add(25,50);

const finalResult = add(result1, result2);
console.log('My final result:', finalResult); */ 

/* 
---------------------------------
Function parameter, function return
--------------------------------
- no return and no parameter
function prepareJuice(){
    // make juice using a fruit
    // save for future
}

prepareJuice();
--------------------------------
- has return and no parameter
function prepareJuice(){
    // make juice using a fruit
    // save for future
    return glass;
}

var servedJuice = prepareJuice();
---------------------------------
- no return and has parameter 
function prepareJuice(fruit){
    // make juice using a fruit
    // save for future
}

prepareJuice(fruit);
--------------------------------
- has return and has parameter
 function prepareJuice(fruit){
    // make juice using a fruit
    // save for future
    return glass;
}

var servedJuice = prepareJuice(fruit);
---------------------------------

Multiple parameters in a function 
-------------------------------------
 function prepareJuice(fruit1, fruit2){
    // make juice using a fruit
    // save for future
    return glass;
}

var servedJuice = prepareJuice(fruit1, fruit2);
--------------------------------------------
*/


//--------- object ------------- //

// object deceleration 
/* var mobile = { // object name
    brand: 'Redmi', // property: value,  
    price: 30000,
    camera: '32px',
    storage: '128gb'
}

console.log(mobile.price); // object.property to find the property value
console.log(mobile.brand);
mobile.brand = 'apple';
console.log(mobile.brand);
console.log(mobile); */ 

var shoppingCart = {
    books: 3, 
    pen: 2, 
    sunglass: 1, 
    pencil: 5
}
// --- GET --- 3 ways
// when you know the specific property name, use dot notation to get the value
//var penCount = shoppingCart.pen;

//console.log(penCount);
// alternative system
// when you know the specific property name, use array type notation to get the value
/* var penCount2 = shoppingCart['pen'];
console.log(penCount2); */ 

// alternative system - in variable 
// when you know the specific property name, use array type notation to get the value
/* var propertyName = 'books';
var propertyValue = shoppingCart[propertyName];

console.log(propertyName, propertyValue); */ 

// to get all the properties name of an object 

/* var properties = Object.keys(shoppingCart);
console.log(properties); */ 

// to get all the values of an object 

/* var propertyValues = Object.values(shoppingCart);
console.log(propertyValues); */


// --- SET --- 3 ways
// dot notation
/* shoppingCart.sunglass = 10; 
console.log(shoppingCart); */

// alternative - array type notation 
/* shoppingCart['sunglass'] = 15; 
console.log(shoppingCart); */

// alternative -  variable

/*  propertyName = 'sunglass'; 
shoppingCart[propertyName] = 23; 
console.log(shoppingCart); */

// --------- looping through an object 

//const keys = Object.keys(shoppingCart);
//console.log(keys);

// hard way 
/* for( var i =0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
   // console.log(propertyName, propertyValue);
} */

// easy way - for in loop
/* for(var propertyNames in shoppingCart){
    const value = shoppingCart[propertyNames];
    console.log(propertyNames, value);
} */

//---switch---

/* const color = 'black';

switch(color){
    case 'yellow': 
        console.log('yellow case');
        break;
    case 'white': 
        console.log('white case');
        break;
    case 'black': 
        console.log('black case');
        break;
    case 'green': 
        console.log('green case');
        break;
    default: 
        console.log('default case');
} */