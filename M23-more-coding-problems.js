// array check
const friends = [12, 13, 45, 657, 56, 69, 73, 46, 50, 99, 88, 72];
console.log(Array.isArray(friends));

const student = { id: 1, roll: 34, name: "Agun" };
console.log(typeof student);

// array er element array er moddhe ase ki nai - system 1
console.log(friends.includes(13));
console.log(friends.includes(43));
// array er element array er moddhe ase ki nai - system 2
if (friends.indexOf(12) !== -1) {
  console.log("ase");
} else {
  console.log("nai");
}

// contact - 2 or more array - converts into 1 array
const newFriends = [3312, 4445, 6775, 345, 5453, 543];
const allFriends = friends.concat(newFriends);
console.log(allFriends);

//slice - kete nile o original array original e thake
const partial = friends.slice(2, 7);
console.log(partial);
console.log(friends);

//splice - kete nile original array theke o kete choto hoye jai
const partial2 = friends.splice(2, 7);
console.log(partial2);
console.log(friends);

const partial3 = friends.splice(1, 3, 99, 78, 55, 66, 77, 88); // splice er third , er por ja boshabo tai kete jawa element er jaigai boshe jabe
console.log(partial3);
console.log(friends);

// remove duplicate items for a array
const names = [
  "abul",
  "babul",
  "sabul",
  "dabul",
  "abul",
  "kabul",
  "babul",
  "gabul",
  "dabul",
  "nabul",
  "pabul",
];

function removeDuplicate(names) {
  const unique = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (unique.includes(name) === false) {
      unique.push(name);
    }
  }
  return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);

//divisible by foo bar foobar / fizzbuzz

/* 
1. show output from: 1-50 
2. if the number is divisible by 3 then instead of the number show 'foo'
3. if the number is divisible by 5 then instead of the number show 'bar'
4. if the number is divisible by 3 and 5 then instead of the number show 'foobar'
*/
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("foobar");
  } else if (i % 3 === 0) {
    console.log("foo");
  } else if (i % 5 === 0) {
    console.log("bar");
  } else {
    console.log(i);
  }
}

// use add and multiplication to calculate wood requirements

/* 
fixed: per item wood requirements
1. chair --> 3 cft 
2. table --> 10 cft
3. bed --> 50 cft

vary: quantity
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairWood = perChairWood * chairQuantity;
  const tableWood = perTableWood * tableQuantity;
  const bedWood = perBedWood * bedQuantity;

  const totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}

const myWood = woodCalculator(2, 2, 5);
console.log(myWood);

// find the cheapest phone from an array of phone objects

const phones = [
  {
    name: "samsung",
    camera: 12,
    storage: "32gb",
    price: 36000,
    color: "silver",
  },
  {
    name: "Nokia",
    camera: 18,
    storage: "64gb",
    price: 45000,
    color: "black",
  },
  {
    name: "Apple",
    camera: 12,
    storage: "128gb",
    price: 88000,
    color: "purple",
  },
  {
    name: "Oppo",
    camera: 12,
    storage: "32gb",
    price: 30000,
    color: "white",
  },
  {
    name: "Mi",
    camera: 48,
    storage: "64gb",
    price: 33000,
    color: "Blue",
  },
];

function cheapestPhone(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }
  return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);

// calculate the total cost of the products in a shopping cart
/*
const shoppingCart = [
    {name: 'shoe', price: 1800},
    {name: 'shirt', price: 1200},
    {name: 'pant', price: 1500},
    {name: 'belt', price: 500},
    {name: 'moneybag', price: 700},
];

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        sum = sum + product.price; 
        
    }
    return sum;
}

const expense  = totalCost(shoppingCart);
console.log(expense);
*/ 

// with quantity 
const shoppingCart = [
    {name: 'shoe', price: 1800, quantity: 2},
    {name: 'shirt', price: 1200, quantity: 5},
    {name: 'pant', price: 1500, quantity: 4},
    {name: 'belt', price: 500, quantity: 3},
    {name: 'moneybag', price: 700, quantity: 5},
];

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal; 
        
    }
    return sum;
}

const expense  = totalCost(shoppingCart);
console.log(expense);

//multilayer discount price calculation 

/* 
1. if ticket price is less than 100, per ticket price: 100
2. if ticket price is less than 100, but less than 200. first 100 ticket will be 100 taka per ticket. and rest ticket will be 90 taka per ticket.
3. if you buy more than 200 tickets
    first 100 --> 100 taka
    101 -200 --> 90 taka
    200+ --> 70 taka
*/

function ticketPrice(ticketQuantity){
    const first100Rate = 100; 
    const second100Rate = 90;
    const restTicketRate = 70;

    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate; 
        return price;
    }else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100; 
        const restTicketPrice = restTicketQuantity * second100Rate; 
        const totalPrice = first100Price + restTicketPrice; 
        return totalPrice;
    }else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate; 
        const restTicketQuantity = ticketQuantity - 200; 
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalPrice = first100Price + second100Price + restTicketPrice; 
        return totalPrice;
    }
}

const price = ticketPrice(1);
console.log(price);

// handle unexpected function input parameter error

function add(num1,num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter a number'
    }
    return num1 + num2;
}

const sum = add(12,'13');
console.log(sum);