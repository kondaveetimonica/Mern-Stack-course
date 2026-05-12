//----
//ARROW FUNCTION
//---

//Basic Syntax

// function multiply(a, b) {
//   return a * b;
// }

const multiply = (a, b) => a * b;
const result = multiply(2, 3);
//Block Body Syntax

// const greet = (name) => {
//   return `Hello, ${name}`;
// };

const greet = (name) => `Hello, ${name}`;

const greetFn = greet("Emmanuel");

// Single Parameter, No Parentheses

const square = (x) => x * x;

const squareFn = square(5);

//No Parameters

const random = () => Math.random();

//Object Literal Return

// const getUser = () => {
//   return {
//     name: "Masynctech",
//     age: 10,
//   };
// };

const getUser = () => ({ name: "Masynctech", age: 10 });
const getUserFn = getUser();

//---
//"let" and "const" in JavaScript
//--

//Hoisting
//using var
//function hoistingIssue() {
//console.log(a);
//var a = 10;
//console.log(a);
//}
//hoistingIssue();
//using var
function hoistingIssue() {
  console.log(a);
  let a = 10;
  //console.log(a);
}
//hoistingIssue();

//block scope

//using var
//for (var i = 0; i < 3; i++) {
// console.log(i);
//}
//console.log(i);

//for (let i = 0; i < 3; i++) {
// console.log(i);
//}
//console.log(i);

//Immutability

//using var
const x = 10;
//x = 20;
//console.log(x);

//Destructuring in js es6

//basic

const numbers = [1, 2, 3, 4];
const [first, second, third] = numbers;
//console.log(third);
//console.log(numbers[2]);

//swap vairables

let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b);

//object destructuring
//extract userdata

//const { name, age, email } = {
//  name: "monica",
//  age: 10,
//  email: "monica@gmail.com",
//};
//console.log(name);

//destrucuting in function parameters
//function greet2({ name, age }) {
//  console.log(`Hello,${name},your age is ${age}`);
//}
//const myUser = {
//  name: "monixx",
//  age: 30,
//};
//greet2(myUser);

//nested destructuring
const {
  id,
  info: { name, age },
} = {
  id: 1,
  info: {
    name: "niha",
    age: 25,
  },
};
console.log(name);
