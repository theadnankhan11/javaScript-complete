
        const promiseOne = new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("Async task is com");
                resolve();
            },1000)
        })
        promiseOne.then(function(){
            console.log("promis consumd");
        })