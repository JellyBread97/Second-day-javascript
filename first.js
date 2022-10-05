/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/*  
1. Numbr - any digit representing number - will not work with any other character
2. String - any type of information made of alphanumeric characters
3. Boolean - has two values - true or false
4. Null - variable has no value
5. Undefined - variable is empty
*/

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/*
Variable is any container that has a type of JavaScript data inside of it
*/

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

var num1 = 12;
var num2 = 20;
var sum = num1 + num2;
console.log(sum);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12;
console.log(x);

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe";
console.log(name);

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

console.log(x - 12);

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john";
let name2 = "John";
let nameCompare = name1 == name2;
console.log(nameCompare);
if (name1 == name2) {
  console.log("Both names start with lowercase.");
} else {
  console.log("Both names don't start with lowercase.");
}

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

x = 5;
if (x === 5) {
  number5 = "five";
}
console.log(number5);

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

const n = 10;
m = n < 20 ? "It's smaller" : "It's bigger";
console.log(m);
