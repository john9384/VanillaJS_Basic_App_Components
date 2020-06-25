const persons = [
  {
    age: 1990,
    name: "Puckett Hess",
  },
  {
    age: 1970,
    name: "Joann Blackburn",
  },
  {
    age: 1980,
    name: "Medina Johnston",
  },
  {
    age: 2000,
    name: "Saunders Pate",
  },
  {
    age: 2010,
    name: "Herring Joyce",
  },
  {
    age: 2015,
    name: "Christian Park",
  },
];
const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 323423 },
  { text: "You are the best", id: 203423 },
  { text: "Ramen in my fav food ever", id: 123423 },
  { text: "Nice Nice Nice", id: 653428 },
];

//Some and Every Checks

//1. At least one person in older than 18
const someIsAdult = persons.some(
  (person) => new Date().getFullYear() - person.age >= 18
);
console.log(someIsAdult);
//2. Everybody is older than 19
const everyIsAdult = persons.every(
  (person) => new Date().getFullYear() - person.age >= 18
);
console.log(everyIsAdult);
//3. Find objeect and return object
const comment = comments.find((comment) => comment.id === 203423);
console.log(comment);

//4. Find index of object
const index = comments.findIndex((comment) => comment.id === 203423);
console.log(index);
// Deleting
// comments.splice(index, 1);
