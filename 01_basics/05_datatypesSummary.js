//primitive
//7 types String, Number, Boolean, null, undefined, bigInt, symbol

const score = 100 ;
const scoreValue = 100.5;

const isLoggedIn = true;
const outTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
//console.log(anotherId);

const bigNumber = 234325464575675876n;

//reference (non primitive)
//array, object and functions
const heroes = ["shaktiman", "nagu", "doga"];
let myObj = {
    name: "sanket",
    age: 29
}

const funct = function(){
    console.log("hello world");
}
 console.log(typeof score);
 console.log(typeof scoreValue);
 console.log(typeof isLoggedIn);
 console.log(typeof outTemp);
 console.log(typeof userEmail);
 console.log(typeof id);
 console.log(typeof anotherId);
 console.log(typeof bigNumber);
 console.log(typeof heroes);
 console.log(typeof myObj);
 console.log(typeof funct);
 
