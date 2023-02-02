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