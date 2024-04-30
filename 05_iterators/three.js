//for of
const arr = [1, 2, 4, "Superman"];
for (const i of arr) {
    // console.log(i);
}

const arry = "sanket";
for (const j of arry) {
    // console.log(j);
}

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("FR", "France");

// console.log(map);

for (const [key,value] of map) {
// console.log( key, ":", value);    
}