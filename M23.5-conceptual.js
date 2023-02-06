// summation 
/* 1 to n
1+2+3+.....+n =
*/

let n= 10;
let sum =0;
for(let i=1; i<=n;i++){
    sum = sum + i;
}
console.log(sum);

// 3 er namta

/* 
1 * 3 = 3
2 * 3 = 6
3 * 3 = 9
4 * 3 = 12
5 * 3 = 15
6 * 3 = 18
7 * 3 = 21
8 * 3 = 24
9 * 3 = 27
10 * 3 = 30
*/
for( let i =1; i<=10; i++){
    console.log(i + "*" + 3+" = " + i*3)
}

// greater than 5 
/* 
input [-1,2,-3,4,5,6,-7,8,-9,10]
output 3
*/

// system 1 - using for loop
/*
let numbers = [-1,2,-3,4,5,6,-7,8,-9,10];
let count = 0;

for(let i= 0; i< numbers.length; i++){
    const element = numbers[i];
    if(element > 5){
        count = count +1;
    }
}
console.log(count);
*/ 

// system 2 - using function

function greaterThanFive(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
      const element = numbers[i];
      if (element > 5) {
          count = count +1;
      }
    }
    return count;
  }
let numbers = [-1,2,-3,4,5,6,-7,8,-9,10];
let result = greaterThanFive(numbers);
console.log(result);

// largest reverse string names 
/* 
John
Alexis
sixelA
*/

function reverseName(nameOne, nameTwo){
    if(nameOne.length > nameTwo.length){
        return nameOne.split("").reverse().join("");
    }else{
        return nameTwo.split("").reverse().join("");
    }
}

let myReverseName = reverseName("John", "Alexis");
console.log(myReverseName);

//radian to degree 
function radianToDegree(radian) {
    if(typeof radian != 'number'){
        return "Provide valid input"
    }
  const PI = 3.14159265359;
  const degree = (radian * (180 / PI)).toFixed(2);
  return degree;
}

let myRadians = radianToDegree(10);
console.log(myRadians);

// ends with .js 

function isJavaScriptFile(fileName){
    if(typeof fileName != 'string' || fileName.length == 0){
        return "Provide valid input";
    }
   if(fileName.endsWith('.js')){
    return true;
   }else{
   return false;
   }
}


let myFile = isJavaScriptFile("app.js");
console.log(myFile);

// is best friend check with object property value 
function isBestFriend(objectOne, objectTwo) {
    if (
      objectOne.name == objectTwo.friend &&
      objectTwo.name == objectOne.friend
    ) {
      return true;
    } else {
      return false;
    }
  }
  console.log(
    isBestFriend({ name: "doe", friend: "alex" }, { name: "john", friend: "doe" })
  );


  // public bus fair 

  /* 
  একটি বড় সংখ্যাক মানুষজন(৫০ বা তার বেশি) পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো  আমাদের বাস ও মাইক্রো আছে ।প্রতিটি  বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে।মাইক্রবাসে ১১ জনের কম হলে মাইক্রবাসে যাওয়া যাবে না।  এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে  একটা সংখ্যা (কতজন যাবে )   নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে ।
  */
  function publicBusFare(participants) {
    if (typeof participants != "number" || participants < 50) {
      return "Provide valid participants...";
    }
    let busSeatCapacity = 50;
    let microSeatCapacity = 11;
  
    let remaining = 0;
    // After calculating the amount of people who can travel by our bus
    // the value of remaining will be:-
    remaining = participants % busSeatCapacity;
    // After calculating the amount of people who can travel by our microbus
    // the value of remaining will be:-
    remaining = remaining % microSeatCapacity;
    
    // Now calculate the total cost of public bus
    let costOfPublicBus = remaining * 250
    return costOfPublicBus;
  }
  console.log(publicBusFare(365));