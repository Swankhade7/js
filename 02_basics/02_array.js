const marvelHeroes = ["spiderman", "thor", "hulk"];
const dcHeroes = ["batman", "superman", "flash"];

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);

// const newArr = marvelHeroes.concat(dcHeroes);

// console.log(newArr);

const allHearoes = [...marvelHeroes, ...dcHeroes];//spread operator
// console.log(allHearoes);

const newArray = [1,2,3,[4,5,6],7,[8,9,[10,11]]];
const goodArray = newArray.flat(4);
// console.log(goodArray);

// console.log(Array.isArray("sanket"));
// console.log(Array.from("sanket"));

const score1 = 500;
const score2 = 600;
const score3 = 900;

const newAr = Array.of(score1,  score2, score3);

console.log(newAr);

