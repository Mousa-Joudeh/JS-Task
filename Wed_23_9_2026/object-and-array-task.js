//1.

let person01 = {
  name: "Adam",
  age: 25,
  gender: "male",
};

console.log(person01.name + person01.age + person01.gender);

//2.

let person02 = {
  name: "Adam",
  age: 25,
};

person02.gender = "male";

console.log(person02);

//3.

let person = {
  name: "Adam",
  age: 25,
};

console.log(person.name);

//============== Array =================
// 1.

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});

//2.

let fruits = ["banana", "cherry", "apple"];

fruits.sort();

console.log(fruits);

//3.

let fruitss = ["apple", "banana", "cherry"];

fruitss.reverse();

console.log(fruitss);

//B.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let newArray = arr1.concat(arr2);

console.log(newArray);

//C.

let numbers01 = [1, 2, 3, 4, 5, 6];

let result = numbers01.slice(2, 4);

console.log(result);

//D.

let arr = [1, 2, 3, 4, 5];

arr.splice(3, 1, 3);

console.log(arr);

//E.

let numbers02 = [1, 2, 3, 4, 5];

console.log(numbers02.indexOf(3));

//F.

let numbers03 = [1, 2, 3, 4, 5];

let result01 = numbers03.join(",");

console.log(result01);

//G.

let numbers04 = "1,2,3,4,5";

let result02 = numbers04.split(",");
console.log(result02);

//7.

let numbers05 = [1, 2, 3, 4, 5];

console.log(numbers05.length);

//8.

let numbers06 = [1, 2, 3, 4, 5];

for (let number of numbers06) {
  console.log(number);
}

//9.
let numbers07 = [1, 2, 3, 4, 5];

console.log(Array.isArray(numbers07));
