//string length , index - kind of array type
// but string is immutable - can't change any value inside the string

const name = 'Masum Rahman';
console.log(name.length);
console.log(name[0]);

// case - string comparison 

const userName = 'blackPink';
const userInput = 'blackPinK';

console.log(userName.toLowerCase());
console.log(userInput.toUpperCase());
console.log(userName.toLocaleLowerCase());

if (userName.toLowerCase() === userInput.toLowerCase()) {
    console.log('valid user');
} else {
    console.log('invalid user');
}


// apply search includes , indexof, startswith, endswith

const lyrics = 'tumi bondhu kala pakhi. ami jeno ki. bosontokale tomay bolte parini.';

//const doesExist = lyrics.includes('Pakhi'); - false- case sensitive Pakhi and pakhi are different
// const doesExist = lyrics.includes('pakhi'); - true

const searchString = 'PakHI';
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
console.log(doesExist);

// one line 
const doesOneLineExist = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesOneLineExist);

//indexOf 

console.log(lyrics.indexOf('pakhi'));

if (lyrics.indexOf('kala') !== 1) {
    console.log('Exists inside the string');
} else {
    console.log('can not find it')
}

//startsWith
console.log(lyrics.startsWith('tumi'));

//endsWith
const fileName = 'mycv.pdf';
console.log(fileName.endsWith('.pdf'));


// string split slice substr substring concat join

//split
const parts = lyrics.split(' ');
console.log(parts);
const sentences = lyrics.split('.');
console.log(sentences);
const chars = lyrics.split('');
console.log(chars);


// slice 
const partial = lyrics.slice(5, 8);
console.log(partial);

//substring 
const partial2 = lyrics.substring(5, 8);
console.log(partial2);

//join
const lines = [
    'tumi bondhu kala pakhi',
    'ami jeno ki',
    'bosontokale tomay bolte parini'
]

const newSong = lines.join(':');
console.log(newSong);

//math , abs, pow, round, ceil, floor and random number
//pow
const result = Math.pow(2, 8);
console.log(result);
//abs
const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1 - num2);

if (gap < 5) {
    console.log('Can be friends');
} else {
    console.log('Stay apart');
}

//round
const number = 3.45126;
const fullNumber = Math.round(number);
console.log(fullNumber);

//ceiling
const ceilNumber = Math.ceil(3.45126);
console.log(ceilNumber);

//floor
const floorNumber = Math.floor(3.45126);
console.log(floorNumber);

//random
console.log(Math.random());

const random = Math.round(Math.random() * 100);
console.log(random);
console.log('----------------');
for (let i = 0; i < 10; i++) {
    const random = Math.round(Math.random() * 100);
    console.log(random);
}

// swap variable. swap without temp, destructing 

let first = 5;
let second = 7; 

const temp = first;
first = second;
second = temp;

console.log(first, second);

// approach 2 - destructing 
//[first, second] = [second, first];


// max - delicious cake 

const jim = 69; 
const dela = 99;
const chinku = 97;

/* if(jim > dela && jim > chinku){
    console.log('Jim will get the cake');
}else if (dela > jim && dela > chinku){
    console.log('Dela will get the cake');
}else{
    console.log('Chinku will get the cake');
} */

function cake (num1, num2, num3){
    const maxNumber = Math.max(num1,num2,num3);
    return maxNumber;
}
const cakeResult = Math.max(jim,dela,chinku);
console.log(cakeResult);

//tallest guy 

function maxInArray(numbers){
    let largest = numbers[0];
    for(let i =0; i < numbers.length; i++){
        const index = i; 
        const element = numbers[index];
        if (element > largest){
            largest = element;
        }
    }
    return largest;
}

const height = [167, 190, 120, 165, 137];
const tallest = maxInArray(height);
console.log('Tallest person is: ',tallest);


// reverse string

function reverseString(text){
    let reversed = '';
    for(let i = text.length - 1; i >= 0; i--){
        const element = text[i];
        reversed = reversed + element;
    }
    return reversed;
}

const myString = 'I am a good boy';
const reversed = reverseString(myString);
console.log('reversed output: ',reversed);

// word reverse 

function reverserWords(str){
    const words = str.split(' ');
    //[ 'I', 'am', 'a', 'good', 'boy' ]
    const result=[];
    for(let i= words.length-1; i>=0; i--){
        const element = words[i];
        result.push(element);

    }
    const reversed = result.join(' ');
    return reversed;
}

const myWord = reverserWords(myString);
console.log(myWord);


//fibonacci series using for loop
// 0,1,1,2,3,5,8,13,21,34,55,89,144

const fibo = [0,1];
for(let i=2; i<=15;i++){
    fibo[i] = fibo[i-1]+fibo[i-2];
}
console.log(fibo);
