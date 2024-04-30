const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newArray = myArray.map( (item) => item + 10);
const newArray = myArray
                .map( (num)=> num *10 )
                .map( (num)=> num+1 )
                .filter( (num)=> num>=40 );
console.log(newArray);