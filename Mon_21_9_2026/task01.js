console.log("data type of number=", typeof 100);
console.log("data type of number=", typeof 73.9);
console.log("data type of number=", typeof NaN);
console.log("data type of number=", typeof "Water");
console.log("data type of number=", typeof false);
console.log("data type of number=", typeof (9 != 11));
let x = "Orang";
let y = "e";
let sum01 = x + y;
console.log("sum=x+y=", sum01);
let a = "Orang";
let b = "s";
let sum02 = a - b;
console.log("sum=a-b=", sum02);
console.log("4" + "8");
console.log("4" - "8");
console.log("name" + 3);
console.log("name" - 3);
console.log(82 * "word");
console.log(1 + "hello");
console.log("hello" + 1);
console.log(1 + true);
console.log("hello" + true);
console.log(typeof Infinity);
console.log(1 == "1");
console.log(1 === "1");

// -------------------------------------------

let cash = 1000;
let current_liabilities = 500;
let divide = cash / current_liabilities;
console.log("cash / current_liabilities", divide);

let revenues = 1000;
let expenses = 500;
let Net_income = revenues - expenses;
console.log("Net_income", Net_income);

let liabilities = 1000;
let equity = 500;
let total_assets = liabilities + equity;
console.log("total_assets=", total_assets);

let profit = 1000;
let sales = 500;
let Net_income02 = profit * sales;
console.log("Net income=", Net_income02);

let num01 = 7;
let num02 = 9;
let num03 = 2;
let Average = (num01 + num02 + num03) / 3;
console.log("Average=", Average);

let price = 150;
let discount = 30 / 100;
let Discount_Amount = price - price * discount;
console.log(Discount_Amount);

let age = 70;
if (age > 18 && age < 30) {
  console.log("true");
} else {
  console.log("fals");
}

let num04 = 2;
let num05 = 3;
let Exponential = num04 ** num05;
console.log(Exponential);

let num06 = 2;
let num07 = 4;
let Remainder = num06 % num07;
console.log(Remainder);

// String-----------------------------------

let string = "Welcome to Orange";
console.log(string.toUpperCase());
console.log(string.slice(8, 10));
console.log(string.replace("Welcome to", "Hello from"));
console.log(string.toLowerCase());
console.log(string.length);
console.log(string.replace("Orange", '"Orange"'));
console.log(string.concat(" Jordan"));

let string02 = "cactus";
let first_letter = string02[0];
let slice_string02 = string02.slice(1);
let replace_c = slice_string02.replaceAll("c", "*");
let resalt = first_letter.concat(replace_c);

console.log(resalt);

// Arrays---------------------------------------
// 1.

let array = ["Coding", "Academy", "By", "Orange"];
array.push("Jordan");
console.log(array);
array.splice(2, 3);
console.log(array);
array.push("By");
array.push("Orange");
console.log(array);
array.splice(0, 0, "Welcome", "To");
console.log(array);
array.splice(0, 3);
console.log(array);
array.unshift("Coding");
console.log(array.join(" "));
console.log(array);
array.splice(1, 2);
console.log(array);

// 2.

let fruit = ["banana", "apple", "orange", "watermelon"];
let vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
console.log(vegetables);
fruit.shift();
console.log(fruit);
fruit.unshift("banana");
console.log(fruit.indexOf("orange"));
fruit.push(5);
console.log(fruit);
vegetables.push("lettuce");
console.log(vegetables.length);
vegetables.push(4);
console.log(vegetables);
vegetables.pop();
fruit.pop();
let food = fruit.concat(vegetables);
console.log(food);
food.splice(4, 2);
console.log(food);
console.log(food.reverse());
let string_food = food.toString();
console.log(typeof string_food);

// Conditionals --------------------------------------
// 1.
let birthYear = 2000;

let currentYear = new Date().getFullYear();
let agee = currentYear - birthYear;

if (agee > 30 && agee <= 60) {
  console.log("You are not eligible. You may join other programs.");
} else if (agee >= 18 && agee <= 30) {
  console.log("You are eligible. Start your application.");
} else if (agee < 18) {
  console.log("You may join the kids' program.");
} else if (agee > 60) {
  console.log("You may join the seniors’ program.");
}

// 2.
function switchCase(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }

  return result;
}

console.log(switchCase("OrAnGe"));

// 3.

function camelCase(str) {
  return str.replaceAll(" ", "");
}

console.log(camelCase("Coding Academy by Orange"));

// 4.

function removeElement(array, element) {
  let index = array.indexOf(element);

  array.splice(index, 1);

  return array;
}

console.log(removeElement(["Coding", "Academy", "By", "Orange"], "By"));

// 5.

function checkNumber(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkNumber(8));

//6.

function checkNumber(value) {
  if (typeof value === "number") {
    return "It is a number";
  } else {
    return "It is not a number";
  }
}

console.log(checkNumber(10));

// 7.

function largestNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(largestNumber(10, 20));

// 8.

function checkTriangle(a, b, c) {
  if (a === b && b === c) {
    return "Equilateral";
  } else if (a === b || a === c || b === c) {
    return "Isosceles";
  } else {
    return "Scalene";
  }
}

console.log(checkTriangle(5, 5, 5));
console.log(checkTriangle(5, 5, 3));
console.log(checkTriangle(5, 4, 3));

// 9.

function checkRange(number, min, max) {
  if (number >= min && number <= max) {
    return "The number is in the range";
  } else {
    return "The number is not in the range";
  }
}

console.log(checkRange(7, 1, 10));

//  10.

function checkLeapYear(year) {
  if (year % 400 === 0) {
    return "Leap Year";
  } else if (year % 4 === 0 && year % 100 !== 0) {
    return "Leap Year";
  } else {
    return "Not a Leap Year";
  }
}

console.log(checkLeapYear(2024));

// Loops --------------------------------------
// 1.
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let i = 1;

while (i <= 50) {
  if (i % 2 === 0) {
    console.log(i);
  }

  i++;
}

// 2.
for (let i = 2; i <= 50; i += 2) {
  console.log(i);
  console.log(i);
}

// 3.
for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}
let i = 1;

while (i <= 50) {
  console.log(i);
  i += 2;
}

//4.
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//5.
function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
}

//6.
function fizzBuzz(number) {
  if (number > 100) {
    return;
  }

  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }

  fizzBuzz(number + 1);
}

fizzBuzz(1);

//7.
function banknotes(amount, notes) {
  let result = [];

  for (let i = 0; i < notes.length; i++) {
    while (amount >= notes[i]) {
      result.push(notes[i]);
      amount -= notes[i];
    }
  }

  return result;
}

console.log(banknotes(57, [25, 10, 5, 1]));

//8.
function countCharacter(str, char) {
  let count = 0;

  str = str.toLowerCase();
  char = char.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }

  return count;
}

console.log(countCharacter("Coding Academy by Orange", "o"));

//9.
for (let i = 0; i <= 20; i++) {
  console.log(i);
}

for (let i = 3; i <= 29; i += 2) {
  console.log(i);
}

for (let i = 12; i >= -14; i -= 2) {
  console.log(i);
}

for (let i = 50; i >= 20; i--) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

//10.

let str = "CodingAcademy";
let Array = [7, 500, "KH404", "black", 36];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (let i = str.length - 1; i >= 0; i--) {
  console.log(str[i]);
}

//11.
let numbers = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
let evens = [];
let odds = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evens.push(numbers[i]);
  } else {
    odds.push(numbers[i]);
  }
}

console.log(evens);
console.log(odds);

//12.
let proteins = ["chicken", "pork", "tofu", "beef", "fish", "beans"];
let grains = ["rice", "pasta", "corn", "potato", "quinoa", "crackers"];
let Vegetables = [
  "peas",
  "green beans",
  "kale",
  "edamame",
  "broccoli",
  "asparagus",
];
let beverages = ["juice", "milk", "water", "soy milk", "soda", "tea"];
let desserts = [
  "apple",
  "banana",
  "more kale",
  "ice cream",
  "chocolate",
  "kiwi",
];

let numberOfMeals = 5;
let meals = [];

while (meals.length < numberOfMeals) {
  let protein = proteins[Math.floor(Math.random() * proteins.length)];
  let grain = grains[Math.floor(Math.random() * grains.length)];
  let vegetable = Vegetables[Math.floor(Math.random() * Vegetables.length)];
  let beverage = beverages[Math.floor(Math.random() * beverages.length)];
  let dessert = desserts[Math.floor(Math.random() * desserts.length)];

  let meal = [protein, grain, vegetable, beverage, dessert];

  let mealString = meal.join(",");

  let exists = false;

  for (let i = 0; i < meals.length; i++) {
    if (meals[i].join(",") === mealString) {
      exists = true;
    }
  }

  if (exists === false) {
    meals.push(meal);
  }
}

console.log(meals);

// Objects --------------------------------------
// 1.

function getProperties(obj) {
  return Object.keys(obj);
}

let student = {
  name: "Mousa",
  age: 25,
  academy: "Orange",
};

console.log(getProperties(student));

//2.
function countProperties(obj) {
  return Object.keys(obj).length;
}

let Student = {
  name: "Mousa",
  age: 25,
  academy: "Orange",
};

console.log(countProperties(Student));

//3.
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

console.log(mergeObjects(obj1, obj2));

//4.
function upperCaseObject(obj) {
  let newObj = {};

  for (let key in obj) {
    newObj[key] = obj[key].toUpperCase();
  }

  return newObj;
}

let studentt = {
  name: "mousa",
  academy: "orange",
  course: "full stack",
};

console.log(upperCaseObject(studentt));

//5.
function removeNull(obj) {
  let newObj = {};

  for (let key in obj) {
    if (obj[key] !== null) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

let sstudent = {
  name: "Mousa",
  age: null,
  academy: "Orange",
  course: null,
};

console.log(removeNull(sstudent));

//6.
function sortProperties(obj) {
  return Object.keys(obj).sort();
}

let sttudent = {
  name: "Mousa",
  course: "Full Stack",
  age: 25,
  academy: "Orange",
};

console.log(sortProperties(sttudent));
