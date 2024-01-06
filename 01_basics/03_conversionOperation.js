let score = "adnan"
let newscore = "45";

// console.log(typeof score);
// console.log(typeof(newsscore));


let valueInNumber = Number(newscore)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello "
let str2 = "adnan"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);   // not readable

console.log(+true);       
console.log(+"");      // false  a empty string give - value in boolean

let num1, num2, num3

num1 = num2 = num3 = 2 + 2
// console.log(num1);

let precount = 0;
console.log(++precount); // Outputs: 1
let postcount = 0;
console.log(postcount++); // Outputs: 0

let postcount1 = postcount;
console.log(postcount++); // Outputs: 0
console.log(postcount++); // Outputs: 0

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion