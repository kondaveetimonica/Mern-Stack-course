//! ways of creating strings
let singleQuoteString = "hello";
let doubleQuoteString = "hello";
let templateliteralstring = `hello`;

let strlength = singleQuoteString.length;
let firstchar = singleQuoteString[0];
let tolowercase = singleQuoteString.toLowerCase();
let toUppercase = doubleQuoteString.toUpperCase();
let position = doubleQuoteString.indexOf("ll");
let slicedstring = doubleQuoteString.slice(1, 4);
let replacedstring = doubleQuoteString.replace("ll", "xx");
let firstName = "monica";
let lastName = "kondaveeti";
//let fullname = firstName.concat(" ", lastName);
let fullname = firstName + lastName;
//template literals
let name = "moni";
let age = 20;
let greeting = `hello ${name} , your age is  ${age} years,good morning`;
