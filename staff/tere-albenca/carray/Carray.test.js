var Carray = require("./Carray");
console.log("TEST CARRAY");

console.log("> CONSTRUCTOR");

console.log("CASE simple construction: construct an instance without elements");

var c = new Carray();

console.log(c);
//Carray {length:0}

console.log("CASE construct an instance with elements");

var c = new Carray(10, 20, 30);

console.log(c);

console.log("CASE construc an instance with strings elements");

var c = new Carray(
  "Ana",
  "Adrian",
  "Javier",
  "Sergio",
  "Bernat",
  "Maite",
  "Sara"
);

console.log(c);

console.log("> FOREACH");
console.log(" CASE iterates an instance with number elements");

var c = new Carray(10, 20, 30);
c.forEach(function (element) {
  console.log(element);
});
console.log(" FOREACH UPPERCASE");
console.log(" CASE iterates an instance with strings to upper-case");

var c = new Carray(
  "Ana",
  "Adrian",
  "Javier",
  "Sergio",
  "Bernat",
  "Maite",
  "Sara"
);
c.forEach(function (element) {
  console.log(element.toUpperCase());
});

console.log("> FIND");
console.log("CASE find person with age 20");
var people = new Carray(
  { name: "Peter", age: 30 },
  { name: "Wendy", age: 25 },
  { name: "James", age: 20 },
  { name: "Campanilla", age: 15 }
);
var person = people.find(function (person) {
  return person.age === 20;
});
console.log(person);
//{nme:'James', age: 20}

console.log("maps");

var cart = new Carray(
  { name: "soks Adidas", price: 20, quantity: 2 },
  { name: "nike Air MAx", price: 80, quantity: 1 },
  { name: "shorts Puma", price: 30, quantity: 3 },
  { name: "Ray ban glasses", price: 70, quantity: 4 }
);
var subtotals = cart.map(function (product) {
  return product.price * product.quantity;
});
console.log(subtotals);
//Carray { 0:40, 1:80, 2:90....}

console.log("> MAPS TO UPPERCASE");
console.log("CASE maps names to uppercase");
console.log("> map");

console.log("CASE maps products from cart to subtotals");

var cart = new Carray(
  { name: "Socks Adidas", price: 20, quantity: 2 },
  { name: "Nike Air Max", price: 80, quantity: 1 },
  { name: "Shorts Puma", price: 30, quantity: 3 },
  { name: "Glasses Ray Ban", price: 70, quantity: 4 }
);

var subtotals = cart.map(function (product) {
  return product.price * product.quantity;
});

console.log(subtotals);
// Carray { 0: 40, 1: 80, 2: 90, 3: 280, length: 4 }

console.log("CASE maps names to upper-case");

var names = new Carray(
  "Ana",
  "Adrian",
  "Javier",
  "Sergio",
  "Bernat",
  "Maite",
  "Sara"
);

var namesInUpperCase = names.map(function (name) {
  return name.toUpperCase();
});

console.log(namesInUpperCase);
// Carray { 0: 'ANA', 1: 'ADRIAN', 2: 'JAVIER', 3: 'SERGIO', 4: 'BERNAT', 5: 'MAITE', 6: 'SARA', length: 7 }
console.log("CASE filter names with 6 characters");

var names = new Carray(
  "Ana",
  "Adrian",
  "Javier",
  "Sergio",
  "Bernat",
  "Maite",
  "Sara"
);
var namesFiltered = names.filter(function (name) {
  return name.length === 6;
});
console.log(namesFiltered);

console.log("CASE every");

var names = new Carray(
  "Ana",
  "Adrian",
  "Javier",
  "Sergio",
  "Bernat",
  "Maite",
  "Sara"
);
var longnames = names.every(function (name) {
  return name.length > 2;
});

console.log(longnames);
console.log("CASE push");
var names = new Carray("Ana", "Adrian", "Javier");
names.push("Bernat", "Maite");
console.log(names);

console.log("numbers includes value 20");
var numbers = new Carray(10, 20, 30);
numbersIncludes =numbers.includes(20);
console.log(numbersIncludes)

console.log('CASE join element from objecte into string')
var name= new Carray ('Carla','David','Merçe')
var namejoin = name.join('')
console.log(namejoin)

console.log('CASE REVERSE SERIES')
var series = new Carray ('Simpson','Big bang theory','Homeland','Futurama')
var reverseSeries = series.reverse()
console.log(reverseSeries)

//--------

console.log('BubbleSort office')

var officeTools = new Carray ('pen', 'scissors','notebook','folder','rubber','glue' )
var bubbleOfficeTools = officeTools.bubbleSort()

console.log(bubbleOfficeTools)