//singelton
//object.create

//object literals
const mySym = Symbol("key1");
const jsUSer = {
  name: "sanket",
  "full name": "sanket wankhade",
  [mySym]: "myKey1",
  age: 29,
  email: "sanket@google.com",
  location: "pune",
  isLoggedIn: false,
  lastlogInDays: ["Monday", "Tuesday", "Wednesday"],
};

// console.log(jsUSer["full name"]);
// console.log(jsUSer.name);
// console.log(typeof mySym);


jsUSer.name = "yogesh";

// console.log(jsUSer.name);

// Object.freeze(jsUSer);

jsUSer.age = 23;

// console.log(jsUSer);
jsUSer.greeting = function (){
  console.log("Welcome JS user");
}
jsUSer.greetingTwo = function (){
  console.log(`Welcome JS user, ${this.name}`);//same object key reference use 'this'
}

console.log(jsUSer.greetingTwo());