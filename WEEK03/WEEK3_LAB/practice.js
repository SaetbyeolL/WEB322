// let x = "twenty";

// let y = parseInt(x);

// if(isNaN(y)){
//     console.log("x cannot be converted to a number");
// }else{
//     console.log("success! the numeric value of x is: " + y);
// }



// promise문제
//// output "A" after a random time between 0 & 3 seconds
function outputA(){
    var randomTime = Math.floor(Math.random() * 3000) + 1;

    return new Promise(function(resolve, reject){ // place our code inside a "Promise" function
        setTimeout(function(){
            console.log("A");
            resolve(); // call "resolve" because we have completed the function successfully
        },randomTime);
    });   
}

// call the outputA function and when it is "resolved", output a confirmation to the console
// outputA().then(function(){
//     console.log("outputA resolved!");
// });




/////////