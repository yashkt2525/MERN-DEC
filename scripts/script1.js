// console.log(add(70, 80));
// console.log(add(20, 80));
// console.log(add(10, 80));
// console.log(add(50, 80));
// console.log(add(60, 80));

// function add(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   console.log(a - b);
// }

// sub(50, 30);

// let result = add(12, 34);

// function print() {
//   console.log("Jatin");
// }

// print();

// Normal  Functions

// function add(a, b, c) {
//   return a + b + c;
// }

// console.log(add(1, 2, 3));

// add1(1, 2, 3);

// function add1(a, b, c) {
//   console.log(a + b + c);
// }

// Anonymous Function
// fn(11);
// var fn = function (a) {
//   if (a % 2 == 0) {
//     console.log("The number is Even");
//   } else {
//     console.log("The Number is Odd");
//   }
// };

// Arrow Functions

// const add = function (a, b) {
//   return a + b;
// };

// const add1 = (a, b) => a + b;

// console.log(index([1, 3, 4, 6, 56], 6));

// const replace = (arr, ele, number) => {
//   const i = arr.indexOf(ele);
//   arr.splice(i, 1, number);
//   return i;
// };

// const arr = [15, 34, 5, 6, 78, 90];

// const index = replace(arr, 89, 94);
// console.log(arr); //[15,34,5,84,78,90]
// console.log(index);

// Objects -----------

// const arr = []

// const harshit = {
//   name: "Harshit",
//   class: 11,
//   hindi: 56,
//   english: 67,
//   math: 20,
//   science: 10,
// };

const jatin = {
  name: "Jatin",
  class: 12,
  hindi: 65,
  english: 66,
  math: 10,
  science: 50,
};

// console.log(harshit.hindi, jatin.hindi);
// console.log(jatin.english);

// jatin.hindi = 90;
// harshit.hindi = 90;

// console.log(harshit);
// console.log(jatin);

const dhoni = {
  name: "MS Dhoni",
  age: 50,
  50: 100,
};

console.log(dhoni);

dhoni.address = "Jharkhand";

dhoni[100] = 80;

dhoni["wife"] = "Shakshi";
console.log(dhoni);

console.log(dhoni["wife"]);

const arr = [
  {
    name: "Jatin",
    class: 12,
    hindi: 65,
    english: 66,
    math: 10,
    science: 50,
  },
  { name: "harshit", class: 12, hindi: 65, english: 66, math: 10, science: 50 },
];

const result = arr.find((ele) => ele.name === "harshit");
console.log(result);


