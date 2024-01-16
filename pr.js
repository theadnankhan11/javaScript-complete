const product = {
        name: "parkar pen (black)",
        star: 5,
        dealOfTheDay: true,
        price: 39

}

// console.table([product]);

const profile = {
        post : 195,
        followers :"569k" ,
        following: 4,
        name : "Sharradha khapra",
        link : "@shardhakapra",
        Work :" Enterperner",
        bio : "Apna college | Ex-microsoft , DRDO"

}

// console.table(profile);


function SetUsername(username){
        //complex DB calls
        this.username = username
        console.log("called");
    }
    
    function createUser(username, email, password){
        SetUsername.call(this, username)
       
        this.email = email
        this.password = password
    }
    
    const chai = new createUser("chai", "chai@fb.com", "123")
    console.log(chai);