//  Primitive :- not give referance of memory location data
//(call by value {make changes in copy data only  not in origial memory} stack memory)
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100; //number
const scoreValue = 100.3; //number

const isLoggedIn = false; //Boolean
const outsideTemp = null; // null empty   typeOf : object
let userEmail;

const id = Symbol("123"); //symbol  give uniqe id
const anotherId = Symbol("123"); //this is another symbol  give uniqe id

// console.log(id === anotherId); // false because thay are not same
// console.log(typeof anotherId);

// const bigNumber = 3456543576654356754n // for long numbers or crptocurrancy and scitific calculation

// *************************************************************
// Reference (Non primitive) direct memory (changes) alocation (not copy)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // object
let myObj = {
  // object
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  // function object
  console.log("Hello world");
};

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++memory alocations+++++++++++++++++++++++
// stack  (primitive )  ,Heap (Not-primitive)

let myName = "Adnankhan@gmail.com";
let anotherName = myName;
anotherName = "anotherkhan@gmail.com";
console.log(myName);
console.log(anotherName);

let userOne = {
  email: "user@google.com",
  upiId: "user@ybl",
};

let userTwo = userOne;
userTwo.email = "user@microsoft.outlook";

console.log(userOne);
console.log(userTwo);
