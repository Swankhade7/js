const myNums = [1, 2, 3, 4, 5, 6, 7];

const multiply = myNums.reduce( function (acc, currval) {
    // console.log(`acc: ${acc} , currval: ${currval}`);
    return acc + currval
} , 0);

// console.log(multiply);

const add = myNums.reduce( (acc, currval) => (acc + currval),0 );
// console.log(add);

const shoppingCart = [
    {
        courseName: "JS",
        price:2999
    },
    {
        courseName: "Py",
        price:4999
    },
    {
        courseName: "DSA",
        price:999
    },
    {
        courseName: "C++",
        price:1999
    }];

const totalPrice = shoppingCart.reduce( (acc, item) => (acc + item.price), 0);
console.log(totalPrice);