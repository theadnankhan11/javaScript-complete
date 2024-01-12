// Immediately Invoked Function Expressions (IIFE)
// Ans ) to call function immediately and To avoid pollution on global scope and

// 1)
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// To avoid error put samicolan 

// ( (name) =>{
//     console.log((`connected To ${name}`));
// }) ("adnan");

// 2)
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');

