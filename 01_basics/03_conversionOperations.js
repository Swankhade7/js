let score = true ; 

//console.log(typeof score);

 score = "33abc";

//console.log(typeof score);

let isValueNumber = Number(score);
//console.log(isValueNumber);


//"33" => 33
//"33abc"=> NaN
// null=> object
//underfined=> NaN
// true=> 1; false=>0
// Number(variable name), String(variable name), Boolean(variable Name)

let isLoggedIn = 1;

let booleanValue = Boolean(isLoggedIn);

//console.log(booleanValue);

let isLoggedOff = 0 ;
let booleanLogOff = Boolean(isLoggedOff);
//console.log(booleanLogOff);

//1=> true; 0=> false; ""=>false; "sanket"=> true

let name = 123 ; 
let convert = String(name);

//console.log(typeof convert);



//Operations



let x  = 100 ; 
let  y = x++;

console.log (x);
console.log(y);


console.log("1" + 1 + 3);
console.log(1 + 1 + "3");