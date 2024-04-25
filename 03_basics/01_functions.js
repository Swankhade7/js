function name() {
  console.log("s");
  console.log("s");
  console.log("s");
  console.log("s");
  console.log("s");
  console.log("s");
}

// name();

function addn(num1, num2) {
  console.log(num1 + num2);
}

// addn(98,76);

function ad(num3, num4) {
  let result = num3 + num4;
  return result;
}

// console.log( ad(67,1098));

function isLoggedIn(username = "New User") {
  return console.log(`${username} just logged in`);
}

isLoggedIn("Sanket");

function cartItemsTotal(...num1) {
  //rest operator
  return num1;
}

// console.log(cartItemsTotal(45,67,8000));


const user = {
    username: "sanket",
    age: 29
}

function fct(anyobject) {
    console.log(`Username is ${anyobject.username} and his age is ${anyobject.age}`);
    
}

fct(user);

const mazaArray = [1,2,3,4,5,6,7,7,8,8];

function getArrayValue(anyArray){
    console.log(anyArray[5]);
}

getArrayValue(mazaArray);