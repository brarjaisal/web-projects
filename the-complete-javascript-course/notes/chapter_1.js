/* Data Types and Variables in JavaScript:
323324 - this is number
'hello world' - this is a string of characters
true/false - this is a boolean
null - this is a null value
undefined - this is an undefined value, not assigned yet, not commonly used
var, let, const - are used to declare variables in JavaScript
 var not used much anymore, let and const are preferred
 const is used for constants, variables that should not change
 let is used for variables that can change, var is used for variables that can be redeclared

{} - this is an object, a collection/dictionary of key-value pairs
[] - this is an array, a list of values
function() - this is a function, a block of code that can be executed
            e.g. function() { console.log("Hello World"); } - this is a function that logs "Hello World" to the console

 Case types: number_of_eggs - this is a snake case type of naming convention for variables
             numberOfEggs - this is a camel case type of naming convention for variables

 operators: +, -, *, /, %, ** - these are arithmetic operators
 +=, -=, *=, /= - these are assignment operators
 == (is the value equal), === (is value strictly equal), != (is not equal to), !==, >, <, >=, <= - these are comparison operators
 && (and condition), || (or condition), ! (not condition) - these are logical operators
 ++, -- - these are increment and decrement operators
 typeof - this is an operator that returns the type of a variable 
 
 loops: for, while, do-while - these are used to iterate over a block of code
 if, else if, else - these are used for conditional statements
 switch - this is used for multiple conditional statements
 break, continue - these are used to control the flow of loops

 e.g. for (let i = 0; i < 10; i++) { console.log(i); } - this is a for loop that logs numbers from 0 to 9
 do { console.log("Hello World"); } while (condition); - this is a do-while loop that executes the code block at least once before checking the condition
 switch (expression) { case value: // code block; break; default: // code block } - this is a switch statement that executes code based on the value of the expression
 break - this is used to exit a loop or switch statement
 continue - this is used to skip the current iteration of a loop and continue with the next iteration
 
 */

// let sentence, number_of_eggs; // variable declaration with let
// sentence = "I have eggs"; // assigning a value to the variable sentence
/* number_of_eggs = 3;
number_of_eggs = 8; // changing the value of number_of_eggs since it is declared with let
let total_groceries = number_of_eggs;
console.log(total_groceries);

Array methods used to manipulate arrays:
.push() - this is used to add an element to the end of an array
.pop() - this is used to remove the last element from an array
.unshift() - this is used to add an element to the beginning of an array
      example:
      const fruits = ["apple", "banana"];
      fruits.push("orange"); // adds "orange" to the end of the array
      fruits.pop(); // removes "orange" from the end of the array
      fruits.unshift("kiwi"); // adds "kiwi" to the beginning of the array
      fruits.shift(); // removes "kiwi" from the beginning of the array   

.shift() - this is used to remove the first element from an array
.splice() - this is used to add or remove elements from an array at a specific index
.slice() - this is used to create a new array with a portion of the original array
.concat() - this is used to merge two or more arrays
.indexOf() - this is used to find the index of an element in an array
.includes() - this is used to check if an array contains a specific element
.reverse() - this is used to reverse the order of elements in an array
.sort() - this is used to sort the elements of an array
.join() - this is used to join the elements of an array into a string
.split() - this is used to split a string into an array of substrings
.filter() - this is used to create a new array with elements that pass a test
.map() - this is used to create a new array with the results of calling a function on each element of the array
.reduce() - this is used to reduce an array to a single value
.find() - this is used to find the first element in an array that satisfies a condition
.findIndex() - this is used to find the index of the first element in an array that satisfies a condition
.forEach() - this is used to execute a function on each element of an array
.every() - this is used to check if all elements in an array satisfy a condition
.some() - this is used to check if at least one element in an array satisfies a condition
.filter() - this is used to create a new array with elements that pass a test

e.g.

Arguments and Parameters in Functions:
function greet(name) { // name is a parameter
  console.log("Hello, " + name);
}
greet("Alice"); // "Alice" is an argument passed to the function
function add(a, b) { // a and b are parameters
  return a + b;
}
console.log(add(5, 3)); // 5 and 3 are arguments passed to the function 
// Functions can also return values
function multiply(x, y = 1) { // y has a default value of 1
  return x * y;
}
console.log(multiply(5)); // 5 is passed as an argument, y defaults to 1, so the result is 5
console.log(multiply(5, 2));    // 5 and 2 are passed as arguments, so the result is 10
// Arrow functions are a shorter syntax for writing functions
const addNumbers = (a, b) => a + b; // this is an arrow function
console.log(addNumbers(2, 3)); // 5
// Template literals are used to create strings with embedded expressions
const name = "John";
const greeting = `Hello, ${name}!`; // this is a template literal
console.log(greeting); // "Hello, John!"    

*/

/*
let condition1 = true;
let condition2 = false;

 console.log(condition1 && condition2); // false, because both conditions are not true

 if (condition2 && condition1) {
  console.log("hi mom");
} else {
  console.log("value was false so here we are");
}

while()
*/

/* const myList = [
  ["Milk", 1],
  ["Bananas", 12],
  ["Bread", 2],
  ["Mangoes", 4],
  ["Avocado", 5],
];
console.log(myList);


function testFun(param1, param2) {
  console.log(param1, param2);
}
testFun((param1 = "hi"), (param2 = "there"));
*/

/*
function nextInLine(arr, item) {
  // Only change code below this line
  nextInLine = arr.push(item); // Adds the item to the end of the array
  
  return item;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

let testArr = [1,2,3,4,5];
console.log ("Before;" + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log(After: " + JSON.stringify(testArr));")
// This code adds an item to the end of an array and returns the item added
// The nextInLine function takes an array and an item as parameters, adds the item to the end of the array, and returns the item.
// The setup initializes an array and displays the array before and after the function call to show the effect of the function.
// The function uses the push menthod to add the item to the end of the array and returns the item added.
// The console.log statements display the array before and after the function call 


nextInLine([], 5);
nextInLine([], 1);
nextInLine([2], 1);
nextInLine([5, 6, 7, 8, 9], 1);
nextInLine(testArr, 10);
testArr[4] = 10;

let val = 5; 
if (val > 5) {
  console.log("Value is greater than 5")
} else {
  console.log ('Value is less than or equal to 5')
}

let val = 'jaisal'

if (val.includes('j')) {
  console.log('val contains the letter j')
} else if (val.includes ('p')) {
  console.log ('val contains the letter p')
} else {
  console.log('val does not contain the letter j or p')
}

function factorial(n) {
  // Base case
  if (n === 0 || n === 1) {
    return 1;
  } else {
  // Recursive case
  return n * factorial(n -1);
  }
}

// Example usage
const result = factorial(5); // Computer 5! (5 factorial)
console.log(result); // Output: 120
// This code defines a recursive function to compute the factorial of a number
// The function checks for the base case where n is 0 or 1 and returns 1
*/

/* for looop example:
for (let i = 0; i < 20; i = i + 1) {
  console.log("The value of i is: ", i);
}
*/

while (img_not_found) {
  img_not_found = findImg();
}

let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
