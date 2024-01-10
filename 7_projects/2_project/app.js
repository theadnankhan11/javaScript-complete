const clock = document.getElementById("clock");
const clock1 = document.getElementById("clock1");


setInterval(function()  {
    let date = new Date()
    clock1.innerHTML = date.toISOString() 
    // console.log(date)
    
    
}, 1000);

// call back function
setInterval(() => {
    let date = new Date ();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);








