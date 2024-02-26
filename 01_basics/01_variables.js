const accountId = 144553; // accountId = 2     // cannot redeclared and reassign
let accountEmail = "hitesh@google.com";
var accountPassword = "12345"; // global
accountCity = "Jaipur"; //not good  a practice
let accountState; //undefined

accountEmail = "hc@hc.com"; //cannot redeclared but reassign
accountPassword = "21212121";
accountCity = "Bengaluru";

// console.log(accountId);
// conso le.log(accountCity);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountState,
  accountCity,
  accountPassword,
]);


