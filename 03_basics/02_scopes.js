const myName = 500;

if (1 > 0) {
  let myName = 700;
  //   console.log("Inner :", myName);
}
// console.log("Outer : ", myName);

let b = 300;
if (true) {
  let b = 10;
  //   console.log("INNER: ", b);
}
// console.log(b);

function one() {
  let username = "sanket";

  function two() {
    let website = "youtube";
    // console.log(username);
  }
  two();
  // console.log(website);
}
one();

if (true) {
  const name = "sanket";
  if (name === "sanket") {
    const website = "youtube";
    // console.log(`${name}, ${website}`);
  }
  // console.log(website);
}
// console.log(name);

console.log(addone(67));
function addone(num) {
  return num + 1;
}

// addtwo(89);//wont work
const addtwo = function(num) {
  return num+2;
}
