// while loop syntax 
// while (expression){
//     statement
// }

// while loop
var roastGiven = 0;
while(roastGiven <7){
    console.log('Give me roast please');
    // roastGiven = roastGiven + 1;
    // roastGiven += 1; 
    roastGiven ++; 
}

// display 1 to 10
var number = 1; 
while(number <= 10){
    console.log(number);
    number++;
}

// display 1 to 10 - even number
var number = 0;
while(number <= 10){
    console.log(number);
    number = number + 2;
}

// display 1 to 10 - odd number
var number = 1
while(number <= 10){
    console.log(number);
    number = number + 2;
} 

// for loop
for(roastGiven=0; roastGiven <=7; roastGiven++){
    console.log('Give me roast please');
}

//simple version of for loop 
for(i=0; i <=7; i++){
    console.log(i);
}

// even number using i
for(i=0; i <=10; i+=2){
    console.log(i);
}

//odd number using i
for(i=1; i <=10; i+=2){
    console.log(i);
}

// display every elements of an array
var numbers = [24, 56, 76, 78, 92, 26, 34, 55, 619];
for(i=0; i < numbers.length ; i++){
    var number = numbers[i];
    console.log(number);
}

//for loop break continue
for(var i =1; i <+ 20; i++){
    if(i > 5){
        break;
    }
    console.log(i);
}

//while loop break continue
var roastGiven = 0; 
while(roastGiven < 10){
    console.log('roast den');
    roastGiven++;
    if(roastGiven > 4){
        break;
    }
}

//continue for loop - continue mane go to the next round or skip the current round
 var numbers = [24, 56, 76, 78, 92, 26, 34, 55, 619];
for(i=0; i < numbers.length ; i++){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}

//while reverse loop - display 10 to 1
var num = 10;
while(num >= 1){
    console.log(num);
    num--;
}

//for reverse loop - display 10 to 1
for(i=10; i>=1; i--){
    console.log(i);
}