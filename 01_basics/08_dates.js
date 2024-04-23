const myDate = new Date();
// console.log(myDate.getDate);//use parenthesis
// console.log(myDate.getDate());
// console.log(myDate.getFullYear());
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());

// const newDate = new Date(1994, 7, 7);
// const newDate = new Date(1994, 7, 7, 7,6);
const newDate = new Date("8-28-1994");

// console.log(newDate.toLocaleString());
const timeStamp = Date.now()
console.log(timeStamp/1000);

console.log(newDate.toLocaleString('default', {
        weekday : 'short'
}));

