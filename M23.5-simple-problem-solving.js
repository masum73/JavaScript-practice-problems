// problem 1 - feet to inch

function feetToInch(feet){
    const inch = feet * 12;
    return inch;
}

const myFeet = 2; 
const myFeetToInch = feetToInch(myFeet);
console.log(myFeetToInch);

// problem 2 - centimeter to meter 

function centimeterToMeter(cm){
    const meter = cm / 100; 
    return meter; 
}

const myCentimeter = 200; 
const myCentimeterToMeter = centimeterToMeter(myCentimeter);
console.log(myCentimeterToMeter);

// problem 3 - count paper
/* 
book1 --> 100 taka
book2 --> 200 taka
book3 --> 300 taka
*/

function paperRequirements(book1Quantity,book2Quantity,book3Quantity){
    const book1Rate = 100;
    const book2Rate = 200; 
    const book3Rate = 300;

    const book1Price = book1Rate * book1Quantity; 
    const book2Price = book2Rate * book2Quantity;
    const book3Price = book3Rate * book2Quantity;

    const totalPrice = book1Price + book2Price + book3Price;
    return totalPrice;
}

const myBooks = paperRequirements(2,2,2);
console.log(myBooks);

// problem 4 - find the largest name in the array 

function bestFriend(friends){
    let largest = friends[0];
    for(let i = 0; i < friends.length; i++){
        const friend = friends[i];
        if (friend.length > largest.length){
            largest = friend;
        }
    }
    return largest;
}

const myFriends = ['sajid', 'mamun', 'kamal', 'jubayer bin rashed', 'chinku'];
const myLongFriend = bestFriend(myFriends);
console.log(myLongFriend);


//[45,87,96,11,63,-56,71,28]

function onlyPositive(numbers){

    let positive = [];
    for(let i=0; i < numbers.length; i++){
        const number = numbers[i];
        if(number < 0 ){
            positive.push(number);
        }
    }
    return positive;

}

const myNumbers = [45,87,96,11,63,-56,71,28];
const positiveNumber = onlyPositive(myNumbers);
console.log(positiveNumber);

