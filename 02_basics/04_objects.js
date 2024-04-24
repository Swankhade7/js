const user = {};
user.name = "san";
user.id = "123abc";
user.age = 29;

// console.log(user);

const anotherUser = {
  email: "sank@google.com",
  fullname: {
    username: {
      firstname: "sanket",
      lastname: "wankhade",
    },
  },
};

// console.log(anotherUser.fullname.username.firstname);

// const oneUser = {user, anotherUser};
// const oneUser = Object.assign({}, user, anotherUser);
const oneUser = { ...user, ...anotherUser };
// console.log(oneUser);

const users = [
  { id: 1, email: "s@gmail.com" },
  { id: 2, email: "s@gmail.com" },
  { id: 3, email: "s@gmail.com" },
  { id: 4, email: "s@gmail.com" },
];

// console.log(users[2].id);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(user.hasOwnProperty("sanket"));

//object destructre

const course = {
  courseName:"javascript",
  coursePrice: 999
}

const {courseName} = course;
console.log(courseName);
