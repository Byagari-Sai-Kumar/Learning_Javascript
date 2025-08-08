//Array is an object that can hold multiple data types together

const fruits = ['apple','banana','mango'];

//We can access the elements of an array using Index
//Array index always starts with 0

console.log(fruits[0]);

//if the index is out of the length it returns undefined
console.log(fruits[5]);

//we can find the length of an array using length

console.log(fruits.length);

//Inseting elements

fruits[3] = 'orange';

console.log(fruits);

//Updating the element

fruits[3] = 'pine apple';
console.log(fruits);

fruits[10] = 'grapes';
console.log(fruits);

console.log(fruits[7]);
console.log(typeof fruits[7]);

console.log(fruits.length);

//Checking data type of array
// if you simply use typeof it always returns Object datatype for array
// So instead use Array.isArray() which returns true or false values

console.log(typeof fruits);
console.log(Array.isArray(fruits));