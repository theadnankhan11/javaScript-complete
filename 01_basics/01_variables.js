const accountId = 144553  // accountId = 2 // not allowed
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

// console.log(accountId);
// console.log(accountCity);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountState,accountCity,accountPassword]);


