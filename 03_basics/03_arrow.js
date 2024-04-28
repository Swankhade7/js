const user = {
    username: "sanket",
    price: 1299,
    welcome: function(){
        console.log(`${this.username} welcome to the website`);
        console.log(this);
    }
    
}

// user.welcome();
// user.username = "krutika";
// user.welcome();

// console.log(this);

function laptop(){
    const name = "lenovo"
    console.log(this.name);
}

// laptop();

// const addtwo = (num1, num2) => {return num1 + num2};
// const addtwo = (num1, num2) =>  (num1 + num2) ;
const addtwo = (num1, num2) => ({username: "sanket"});
console.log(addtwo(999990, 3723651273126));