// array
const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[1]);

// any data type value can add in Array
const myHeors = ["shaktiman", "naagraj" , 22, 23, true, false ]
// console.log(myHeors);

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2);



// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));     // true  0r false value 
// console.log(myArr.indexOf(3));   // give the position of value

// const newArr = myArr.join()   // in string type value 

// console.log(myArr);
// console.log( newArr);


// slice, splice
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);

const myn2 = myArr.splice(1, 3)
console.log("B ", myArr);
console.log(myn2);

console.log("C ", myArr);