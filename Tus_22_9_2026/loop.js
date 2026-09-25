//1.

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

//2.

let arr01 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr01.length; i++) {
  console.log(arr01[i]);
}

//3.

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

//4.

let sum01 = 0;

for (let i = 1; i <= 10; i++) {
  sum01 += i;
}

console.log(sum01);

//5.

let arr02 = [1, 2, 3, 4, 5];
let largest = arr02[0];

for (let i = 1; i < arr02.length; i++) {
  if (arr02[i] > largest) {
    largest = arr02[i];
  }
}

console.log(largest);

//6.

let arr04 = [1, 2, 3, 4, 5];
let sum02 = 0;

for (let i = 0; i < arr04.length; i++) {
  sum02 += arr04[i];
}

let average = sum02 / arr04.length;

console.log(average);

//7.

let num01 = 5;
let factorial = 1;

for (let i = 1; i <= num01; i++) {
  factorial *= i;
}

console.log(factorial);

//8.

let num02 = 10;

let first = 0;
let second = 1;

for (let i = 0; first <= num02; i++) {
  console.log(first);

  let next = first + second;

  first = second;
  second = next;
}

//9.

let num03 = 20;

for (let i = 2; i <= num03; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}

//10.

let arr05 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < arr05.length; i++) {
  for (let j = 0; j < arr05[i].length; j++) {
    console.log(arr05[i][j]);
  }
}

//11.

let arr06 = [1, 2, 3, 4, 5];

for (let i = arr06.length - 1; i >= 0; i--) {
  console.log(arr06[i]);
}

//12.

let arr07 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr07.length; i += 2) {
  console.log(arr07[i]);
}

//13.

let arr08 = [1, 2, 1, 3, 2, 1];
let number = 1;
let count = 0;

for (let i = 0; i < arr08.length; i++) {
  if (arr08[i] === number) {
    count++;
  }
}

console.log(count);

//14.

const heros = [
  { name: "Iron Man", power: "Tech" },
  { name: "Spider-Man", power: "Spider abilities" },
  { name: "Thor", power: "Godly powers" },
  { name: "Hulk", power: "Super strength" },
];

const newHeros = heros.map(function (hero, index) {
  return {
    hero: hero.name,
    power: hero.power,
    id: index,
  };
});

console.log(newHeros);

//15.

function filterWords(inputWords) {
  return inputWords.filter(function (word) {
    return word.length > 7;
  });
}

const inputWords = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

console.log(filterWords(inputWords));

//16.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumSquaredDivisibleBy5 = numbers.reduce(function (sum, number) {
  if (number % 5 === 0) {
    sum += number * number;
  }

  return sum;
}, 0);

console.log(sumSquaredDivisibleBy5);
