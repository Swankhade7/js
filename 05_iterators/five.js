const coding = ["js", "c++", "ruby", "python", "java"];

coding.forEach( function (item){
    // console.log(item);
} )

coding.forEach( (val)=>{
    // console.log(`the value is ${val}`);
})

function printMe(val){
    console.log(val);
}
// coding.forEach(printMe);

coding.forEach((val, index, arr) =>{
    // console.log(`${val} is at the index of , ${index}, in the array`, arr);
})

const myCoding = [
    {
        language : "javascript",
        languageFileName : "js"
    },
    {
        language : "python",
        languageFileName : "py"
    },
    {
        language : "java",
        languageFileName : "j"
    },
    {
        language : "C plus plus",
        languageFileName : "c"
    },
];

myCoding.forEach( (item)=>{
    console.log(item.language);
} );