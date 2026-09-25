//1.

function findSmallest(arr) {
  return Math.min(...arr);
}

console.log(findSmallest([30, 5, 60, 7]));

//2.

function AlphabeticalOrder(str) {
  return str.split("").sort().join("");
}

console.log(AlphabeticalOrder("hello"));

//3.

function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(8));

//4.

function oddOrEven(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddOrEven(9));

//5.

function addUp(num) {
  let sum = 0;
  for (i = num; i > 0; i--) {
    sum += i;
  }
  return sum;
}

console.log(addUp(8));

//6.

function minMaxLengthAverage(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let length = arr.length;

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let average = sum / length;

  return [min, max, length, average];
}

console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));

//7.

function countWords(str) {
  return str.split(" ").length;
}

console.log(countWords("hello from CodingAcademy!"));

//8.

function MultiplyByLength(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr.length);
  }

  return result;
}

console.log(MultiplyByLength([4, 2, 5]));

//9.

function checkEnding(str1, str2) {
  return str1.endsWith(str2);
}

console.log(checkEnding("CodingSchool", "Ac"));

//10.

function doubleChar(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result += str[i] + str[i];
  }

  return result;
}

console.log(doubleChar("Coding"));

//11.

function findIndex(arr, element) {
  return arr.indexOf(element) + 1;
}

console.log(findIndex(["Ali", "Mazen", "Ayham", "Murad"], "Ali"));
