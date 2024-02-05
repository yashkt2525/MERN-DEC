// Functions --   arrow function,annonymous function , normal function, IIFE
// Objects ---
// Hoisting --
// Datatypes -- primitive --- 7types , Non Primitive -- Object , arrayy and functions
// loops
// Conditionals ----  if, else , else if , ternary operators,
// Operators ---  Arithmetic Operator, Logical Operator, Assignment Operators
// Arrays -- methods -- shift , unshift , splice , slice , push ,  pop , indexOf , find , LastIndexOf , reverse

// Variable Initialisation -- Let , Var , Const

// Main 3 Functions or Methods Of Array

// 1. Map
// 2. Reduce
// 3. Filter

// 1. Map

// const price = [1000, 2000, 4000, 5000, 7000];

// const discountedPrice = price.map((ele) => `Rs  ${ele - ele * 0.2}`);

// console.log(discountedPrice);

const str = "327678shdgffshsdhdshdjdszjeuiyrwe";

const str1 = "djhfdsfhsdhfsjdfh";

const str2 = `sdkjhdsjkhdsjkd`;

const para = "sdhfgsdhdshjs";

const para1 = `dkjdjbdsjkbdsjsdkjdsb
jjsdkvndjnvjkbvfjk
sdmkvndkvndlfkvfd
sdnnvkjdnnfdjkvdf
jsdjkjsdv
sdjjdskjdvd
dkvdfnjdbfbvjfd
sdnjkvndsjkbnsfjd`;

console.log(para1);

const number = 50;

const line = `Roll number ${number}`;

const name = ["Yash", "Harshit", "Jatin", "Manoj", "Ram", "Shyam"];

name.map((ele) => console.log(`hello ${ele} Kya haal hai`));

const s = "YAsH Tyagi";
console.log(s.toUpperCase());
console.log(s.toLowerCase());
const a = s.split(" ");

console.log(a.join());

// Filter

const newArr = [100, 300, 200, 400, 500, 600, 700, 800];

// function sumOfArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// console.log(sumOfArray(newArr));

console.log(newArr.reduce((acc, ele) => acc + ele));

// console.log(newArr.filter((ele) => ele < 500));

// reduce

// console.log(line);
