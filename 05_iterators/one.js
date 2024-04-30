for (let i = 3; i <= 30; i+=3) {
    // console.log(i);
    
}
for (let i = 0; i <= 10; i++) {
    const element = i ;
    if (element == 5) {
        // console.log("5 is the best number");
    }
    // console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Multiplication table of ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log( `inner loop value ${j} and inner loop value ${i} `);
        // console.log(i + '*' + j + '=' + i*j);
        
    }
}

const superheroes = ["batman", "superman", "aquaman"];
for (let index = 0; index < superheroes.length; index++) {
    const element = superheroes[index];
    // console.log(element);
    
}
//break 
// for (let i = 1; i < 20; i++) {
//     if (i === 7) {
//         console.log(`${i} is the best number`);
//         break
//     }
//     console.log(`Value of i is ${i}`);
// }
for (let i = 1; i < 20; i++) {
    if (i === 7) {
        console.log(`${i} is the best number`);
        continue
    }
    console.log(`Value of i is ${i}`);
}