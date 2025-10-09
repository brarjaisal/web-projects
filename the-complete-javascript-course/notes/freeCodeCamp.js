45345435; // this is a number

("hello babe"); // this is a string of characters
true & false; // these are booleans

let friends = {
  jaisal: "is super cool",
  lucy: "isn't so cool",
  number_of_eggs: sentence,
};

let example_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let is_true = true;

console.log(example_array);
console.log(friends);
console.log(is_true);
console.log("hello world");

/*
Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.
Tests
Passed:1. nextInLine([], 5) should return a number.
Passed:2. nextInLine([], 1) should return 1
Passed:3. nextInLine([2], 1) should return 2
Passed:4. nextInLine([5,6,7,8,9], 1) should return 5
Passed:5. After nextInLine(testArr, 10), testArr[4] should be 10
*/

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  var removed = arr.shift();
  return removed;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/*
Counting Cards
In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

Count Change	Cards
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'
You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Outputs: -3 Hold or 5 Bet

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.

Run the Tests (Ctrl + Enter)
Reset this lesson
Get Help
Tests
Passed:1. Your function should return a value for count and the text (Bet or Hold) with one space character between them.
Passed:2. Cards Sequence 2, 3, 4, 5, 6 should return the string 5 Bet
Passed:3. Cards Sequence 7, 8, 9 should return the string 0 Hold
Passed:4. Cards Sequence 10, J, Q, K, A should return the string -5 Hold
Passed:5. Cards Sequence 3, 7, Q, 8, A should return the string -1 Hold
Passed:6. Cards Sequence 2, J, 9, 2, 7 should return the string 1 Bet
Passed:7. Cards Sequence 2, 2, 10 should return the string 1 Bet
Passed:8. Cards Sequence 3, 2, A, 10, K should return the string -1 Hold


solution:
let count = 0;

function cc(card) {
  // Only change code below this line
switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";  
}
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

/*