var Carray = require("./Carray");
console.log("TEST CARRAY");

console.log("> CONSTRUCTOR");

console.log("CASE simple construction: construct an instance without elements");
@ts-ignore
var c = new Carray;

console.log(c);
//Carray {length:0}

console, log("CASE construct an instance with elements");

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
  { name: "soks Adidas", price: 20, quantitu: 2 },
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
var names = new Carray(
  "Ana",
  "Javier",
  "Bernat",
  "Sergio",
  "Maite",
  "Sara",
  "Adrian"
);

var namesInUpperCase = names.map(function (name) {
  return name.toUpperCase;
});
console.log(namesInUpperCase);
//carray { 0:'ANA', 1: 'JAVIER', 2: 'BERNAT', 3: 'SERGIO', 4: 'MAITE', 5: 'SARA', 6: 'ADRIAN', length: 7}
