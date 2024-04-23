const  score = 900 ; 
// console.log(score);

const newScore = new Number(900.90909);
// console.log(newScore);
//console.log(newScore.toString());
const appropriate = newScore.toPrecision(3);
// console.log(appropriate);

const bigNum = 10000000000;
// console.log(bigNum.toLocaleString('en-IN'));

//==================Maths
// console.log(Math);
// console.log(Math.abs(-9));//converts negative num to positive num
// console.log(Math.round(9.7));//rounds off any decimal number 0 to 5 lower round, 5 to 10 upper
// console.log(Math.ceil(9.2));//rounds off to higher num 9.2>>10
// console.log(Math.floor(9.8));//rounds off to lower num 9.8>>9
// console.log(Math.round(Math.sqrt(78)));
// console.log(Math.min(7,3,87,6,4,32,4));
// console.log(Math.max(9,2,56,2,3,5,7,7,4,3,2));

// console.log(Math.random());
// console.log((Math.random()*10)+1);

const min= 40;
const max = 70;

const random = Math.floor(Math.random()*(max - min + 1)+ min);
console.log(random);