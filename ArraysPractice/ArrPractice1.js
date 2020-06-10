const inventors = [
  { first: "Albert", last: "Einstein", born: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", born: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", born: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", born: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", born: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", born: 1473, passed: 1543 },
  { first: "Max", last: "Planck", born: 1858, passed: 1947 },
];
const celebs = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hillaire",
  "bellow, Saul",
  "benchley, robert",
  "benenson, peter",
  "ben-gurion, david",
  "benjamin, walter",
  "benn tony",
  "bennington, chester",
  "benson, leana",
  "bent, silas",
  "bentsen, lloyd",
  "berger, ric,",
  "bergman, ingmar",
  "berio, luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birtell, Augustine",
  "Black Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];

//Case 1 fillter inventors born in the 1500's
const bornIn1500s = inventors.filter(
  (inventor) => inventor.born >= 1500 && inventor.born < 1600
);
// console.table(bornIn1500s);

//Case 2 Give an array of inventory first and last name
const fullnames = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
// console.log(fullnames);

//Case 3 sort the inventors by birthdate, oldest to youngest
const sorted_by_age = inventors.sort((a, b) => a.born - b.born);
// console.table(sorted_by_age);

//Case 4 How many years did all the inventors live altogether
//Reduce function takes two arguments the callback function and an initial state (Here 0 )
//The callback function has two argument, the final state and the single item from the array (Here inventor)
const total_years = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.born);
}, 0);
// console.log(total_years);

//Case 5 sort the inventors by the from most years spent alive to the least
const sorted_by_livespan = inventors
  .map((inventor) => {
    inventor.livespan = inventor.passed - inventor.born;
    return inventor;
  })
  .sort((a, b) => b.livespan - a.livespan);
// console.table(sorted_by_livespan);

//Case 6 Create a list of Boulevards in Paris that contains 'de' anywhere in the name
// link to list
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

/* // --> From page inspection the div container

const category = document.querySelector(".mw-category");
const links = Array.from(category.querySelectorAll("a"));

// --> Convert to array with Array.from since querySelector returns a Nodelist
// conversion can also be done with the rest operator
//--> Map the array and then filter

const de = links
  .map((link) => link.textContent)
  .filter((streetName) => streetName.includes("de")); */

//Case 7 Sort the celebs Array Alphabetically
let sortedCeleb = celebs
  .map((celeb) => {
    name = celeb.split(",").join(" ").toUpperCase();
    return name;
  })
  .sort();
// console.log(sortedCeleb);

//Case 8 Tally the given array
let list = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "truck",
  "car",
  "van",
  "truck",
  "car",
  "walk",
  "van",
  "van",
  "walk",
  "van",
  "truck",
  "car",
  "truck",
];
const tallyObj = list.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.table(tallyObj);
