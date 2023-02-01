/*
Problem 1 - Reverse the string
Write a function solution that takes a string parameter and returns the word in reverse order.

In this task, you are given an input string and the task is to reverse the input string.

*/

function reverseMaker(word) {
    let splitWord = word.split('');
    let reverseWord = splitWord.reverse();
    let joinReverseWord = reverseWord.join('');
    return joinReverseWord;
  };

const myWord =  reverseMaker('Hello world');
console.log(myWord);

/*
Problem 2 - Detect vowel and consonant
Write a function solution that takes an alphabet as a function parameter and print whether it is VOWEL or CONSONANT.

*/

function detectVowelConsonant (letter){
    switch(letter){
        case 'a': 
        console.log('vowel');
        return;
        case 'e': 
        console.log('vowel');
        return;
        case 'i': 
        console.log('vowel');
        return;
        case 'o': 
        console.log('vowel');
        return;
        case 'u': 
        console.log('vowel');
        return;

        default: 
        console.log('consonant');
    }
    /*
    if(letter === 'a' || 'e' || 'i' || 'o' || 'u'){
        console.log('vowel');

    }else{
        console.log('consonant');

    }
    */
}

detectVowelConsonant('o');

/*
Problem 3 - Calculate total cost
Suppose you want to create a shopping cart where it will calculate the total price of the products added. 

Implement a function totalCost that will take an array of objects where each object will have two properties: name and price. The function totalCost will take the array of objects as a parameter and return the total price of the products added to the shopping cart.

*/

function totalCost(productName, productPrice){
    var productObject = {
        pName: productName,
        pPrice: productPrice
    }
    var totalPrice = productObject.pPrice;
    var totalProduct = productObject.pName;
    console.log(totalProduct, totalPrice);
}

//totalCost([{ name: "Dano Milk", price: 500 }, { name: "Taaza Tea", price: 200}, { name: 'Fresh Sugar', price:300} ])

totalCost('milk',300);

/*
Problem 4 - Convert temperature

Learn how to create a temperature converter. Your task is to provide a value in Fahrenheit and then convert it into Celsius . Then round it up to two decimal places if you get fraction. And return the rounded value as output. 
Alert: The output must be in a number format. 
The formula below shows how to convert from Fahrenheit to Celsius temperature measurements:

℃=(℉-32)/1.8

*/
function temperatureConverter(valNum) {
    let converter = (valNum -32) / 1.8;

    function isInt(converter){
        if(parseInt(converter) === converter){
            console.log(converter);
        }else{
            const roundUpConverter = converter.toFixed(2);
            console.log(parseInt(roundUpConverter));
        }
    }

    isInt(converter);
}

temperatureConverter(50);
temperatureConverter(103);

/*
Problem 5 - String Operation

John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to combine these two strings and print them in one line. Help John write the program.

Sample Input:
I am going to be
an awesome web developer

Output:
I am going to be an awesome web developer

*/

function stringCombine(str1, str2){
    let combine = str1 + ' '+ str2;
    return combine; 
}
const myString = stringCombine('I am going to be', 'an awesome web developer');
console.log(myString);

/*
Problem 6 - Hello universe

Welcome you to Javascript world!!! You will have no input. You just have to return a single line "Hello Universe!! Welcome me to JS World!!!" as output.

*/

function helloUniverse(){
    return 'Hello Universe!! Welcome me to JS World!!!';
}

const helloJs = helloUniverse();
console.log(helloJs);

/*
Problem 7 - Count the number of all zero

Complete the function called count_zero() which will take a binary string (Binary string is a string which consists of only 0 and 1) as a parameter and count how many 0’s are there in that string.

sample input: 10101 
output: 2

*/

function countZeros ( binary_num ) {
    
    let binaryDigits = binary_num;
    let zeroDigits = binaryDigits.toString().split(1);
    let zeroIncludes = zeroDigits.includes('0');
    if(zeroIncludes === true){
        let count = 0;
        let counts = count++; 
        return counts;
    }
    
}

const zCount = countZeros(10101);
console.log(zCount);