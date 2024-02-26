var c = 300
let a =  300
if(true){
    let a = 10
    const b = 20
    // console.log("INNRT:" , a);
}
// console.log(a);
// console.log(b);
// console.log(c);




function one(){
    const  username = "adnan"

    function two(){
        const  website = "github"
        console.log(username);
        console.log(website);
    }
    two()
}
one()

if(true){
    const username = "adnan";
    if (username === "adnan") {
        const website =  " youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

console.log(one(4))
function one(num){
    return num +1;
}

// console.log(addTwo(4)) // error cant access before initallization hoisting
const addTwo = function two(num){
    return num + 2;
}


const arrfun = (num) => {
    return num *= 5
} 

console.log(arrfun(3))