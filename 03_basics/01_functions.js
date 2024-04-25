function name(){
    console.log("s");
    console.log("s");
    console.log("s");
    console.log("s");
    console.log("s");
    console.log("s");
}

// name();

function addn(num1, num2){
console.log(num1 + num2);
}

// addn(98,76);

function ad(num3, num4) {
let result = num3+num4;
return result;    
}

console.log( ad(67,1098));


function isLoggedIn(username = "New User") {
    return console.log(`${username} just logged in`);
}

isLoggedIn("Sanket");
