const name = "sanket";
const count = 78;
//console.log(`Hi my name is ${name} and i have ${count} rupees`);

const name1 = new String("krutika");
//console.log(`${name1[3].toUpperCase()} is fourth index of Krutika string`);
//console.log(name1.charAt(3));
//console.log(name1.indexOf("k"));

const newName = name1.substring(0, 3);
//console.log(newName);

const newName1 = name1.slice(-1, 3);
//console.log(newName1);

const jaipur = "     pinkcity     ";
console.log(jaipur.trim());

const url = "https://sanket.com/concat%20at";

console.log(url.replace("%20", "__"));
console.log(url.includes("chundal"));

const guide = "bodyCamera-trailCamera-smartCamera-underWater-rugged";
const guideArray = guide.split('-',-1);
console.log(guideArray);

let mood = "happy ";
//console.log(`I feel ${mood.repeat(5)}`);
console.log(mood.padStart(12, 'qwertyuiop'));
