//1.
let age = 30;

if (age > 18) {
  console.log("You are an adult");
}
//2.
let num = 8;

if (num % 2 === 0) {
  console.log("The number is even");
}
//3.
let char = "C";

if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
  console.log("It's a letter");
}
//4.
let list = ["a", "mousa", 3];

if (Array.isArray(list)) {
  console.log("It's an array");
}
//5.
let x = 10;

if (x > 0) {
  console.log("x is a positive number");
}
//9.
let z = 12;

if (z % 3 === 0) {
  console.log("z is a multiple of 3");
}
//10.
let password = "mousa123";

if (password.length >= 8) {
  console.log("Your password is strong");
}
//11.
let age02 = 45;

if (age02 >= 18 && age02 <= 65) {
  console.log("You are of working age");
}
//12.
let color = "green";

if (color === "red" || color === "green" || color === "blue") {
  console.log("color is a primary color");
}
//13.
function isValidNumber(value) {
  if (!isNaN(value)) {
    console.log(value + " is a valid number");
  } else {
    console.log(value + " is not a number");
  }
}

isValidNumber(11);
isValidNumber("19");
isValidNumber("xyz");
isValidNumber("17.5");
isValidNumber("21F");
