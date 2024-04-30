const user = {};

// if (user) {
//     console.log("there is a user");
// } else {
//     console.log("no user");
// }

// falsy values false, 0, -0, BigInt 0n, "",NaN, null, undefined
// truthy "0", " ", "false" , [], {} , function(){}

// if (user.length === 0) {
//     console.log("array is khali");
// }

// if (Object.keys(user).length == 0) {
//     console.log("object bhi khali bro");
// }

//null coalescing operator\

let one;
one = 5 ?? 10;
one = null ?? 10;
one = undefined ?? 78;
one = null ?? 99 ?? 23;
// console.log(one);

//terniary operator

// condition ? true : false;
const  pani = 100;

pani>50 ? console.log("mehenga hai") : console.log("sasta hai");