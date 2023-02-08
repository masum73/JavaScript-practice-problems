// recursion using sum of numbers

/* 
incremental
let sum = 0; 
for(let i =0; i<=5; i++){
    sum = sum + i;
}

console.log(sum);
 */

/* 
decremental
let sum = 0; 
for(let i =5; i<=1; i--){
    sum = sum + i;
}

console.log(sum);
 */

/*
Recursive function - A function that calls itself
Recursion - the approach is called recursion
function sum(i){
    if(i==1){
        return 1;
    }
    return i + (sum(i-1));
}

const result = sum(5);
console.log(result);
*/
/* 
    5 + sum(4)
    5 + 4 + sum(3)
    5 + 4 + 3 + sum(2)
    5 + 4 + 3 + 2 + sum(1)
    5 + 4 + 3 + 2 + 1 
    15
*/

// factorial
/*
let factorial = 1 ;
for(let i=5; i>=1; i--){
    factorial = factorial +1;
}
console.log(factorial);
*/
/* 
recursive function
function factorial(i){
    if(i===1){
        return 1;
    }
    return i * factorial(i-1);
}
const result2 = factorial(5);
console.log(result2);
 */

//object
const student = {
  name: "sakib",
  id: 121,
  address: "movie",
  isSingle: true,
  friends: ["apu", "salma", "mou"],
  car: {
    brand: "tesla",
    price: 8000000,
    model: 2022,
    manufacturer: {
      name: "elon mask",
      country: "USA",
    },
  },
};

console.log(student);

// arguments - array like object - ony function er vitore e pawa jai

function add(num1, num2) {
  console.log(num1, num2);
  console.log(arguments);
  console.log(arguments[3]);
}

add(12, 13, 45, 67, 676, 54);

// array - object but not array
const products = {
  0: 15,
  1: 56,
  2: 89,
};

const numbers = [23, 44, 56, 66, 32, 224, 34, 555];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}
// for of loop
for (const number of numbers) {
  console.log(number);
}

const myProducts = [
    {id: 1, name:'mi', price: 23000},
    {id: 2, name:'Nokia phone', price: 32000},
    {id: 3, name:'Samsung', price: 34000},
    {id: 4, name:'Oppo PHone', price: 55000},
]



function matchedProducts(myProducts, search){
    const matched =[];
    for(const myProduct of myProducts){
       if(myProduct.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(myProduct);
       }
    }
    return matched;
}

const result3 = matchedProducts(myProducts, 'phone')
console.log(result3);