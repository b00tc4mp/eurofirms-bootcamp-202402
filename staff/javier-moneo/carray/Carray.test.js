var Carray = require('./Carray');

console.log('TEST Carray');

console.log('> constructor');

console.log('CASE construct an instance without elements');

var c = new Carray();

console.log(c);
// Carray { length: 0 }

console.log('CASE constructs an instance with number elements');

var c = new Carray(10, 20, 30);

console.log(c);
// Carray { 0: 10, 1: 20, 2: 30, length: 3 }

console.log('CASE constructs an instance with string elements');

var c = new Carray(
  'Ana',
  'Adrian',
  'Javier',
  'Sergio',
  'Bernat',
  'Maite',
  'Sara'
);

console.log(c);
// Carray { 0: 'Ana', 1: 'Adrian', 2: 'Javier', 3: 'Sergio', 4: 'Bernat', 5: 'Maite', 6: 'Sara', length: 7 }

console.log('> forEach');

console.log('CASE iterates an instance with number elements');

var c = new Carray(10, 20, 30);

c.forEach(function (element) {
  console.log(element);
});
// 10
// 20
// 30

console.log('CASE iterates an instance with strings to upper-case');

var c = new Carray(
  'Ana',
  'Adrian',
  'Javier',
  'Sergio',
  'Bernat',
  'Maite',
  'Sara'
);

c.forEach(function (element) {
  console.log(element.toUpperCase());
});
// ANA
// ADRIAN
// JAVIER
// SERGIO
// BERNAT
// MAITE
// SARA

console.log('> find');

console.log('CASE find person with age 20');

var people = new Carray(
  { name: 'Peter', age: 30 },
  { name: 'Wendy', age: 25 },
  { name: 'James', age: 20 },
  { name: 'Campa', age: 15 }
);

var person = people.find(function (person) {
  return person.age === 20;
});

console.log(person);
// { name: 'James', age: 20 }

console.log('> map');

console.log('CASE maps products from cart to subtotals');

var cart = new Carray(
  { name: 'Socks Adidas', price: 20, quantity: 2 },
  { name: 'Nike Air Max', price: 80, quantity: 1 },
  { name: 'Shorts Puma', price: 30, quantity: 3 },
  { name: 'Glasses Ray Ban', price: 70, quantity: 4 }
);

var subtotals = cart.map(function (product) {
  return product.price * product.quantity;
});

console.log(subtotals);
// Carray { 0: 40, 1: 80, 2: 90, 3: 280, length: 4 }

console.log('CASE maps names to upper-case');

var names = new Carray(
  'Ana',
  'Adrian',
  'Javier',
  'Sergio',
  'Bernat',
  'Maite',
  'Sara'
);

var namesInUpperCase = names.map(function (name) {
  return name.toUpperCase();
});

console.log(namesInUpperCase);
// Carray { 0: 'ANA', 1: 'ADRIAN', 2: 'JAVIER', 3: 'SERGIO', 4: 'BERNAT', 5: 'MAITE', 6: 'SARA', length: 7 }

console.log("CASE filter names that starts with 'A'");

var names = new Carray(
  'Ana',
  'Adrian',
  'Javier',
  'Sergio',
  'Bernat',
  'Maite',
  'Sara'
);

var namesInUpperCase = names.filter((name) => name.startsWith('A'));

console.log(namesInUpperCase);

console.log('CASE reverse names');

var names = new Carray(
  'Ana',
  'Adrian',
  'Javier',
  'Sergio',
  'Bernat',
  'Maite',
  'Sara'
);

var namesInUpperCase = names.reverse();

console.log(namesInUpperCase);

console.log('##################### FUNCTION SLICE ##################');
console.log('CASE 1: extract from object the values between index 2 and 6');

var superHeroes = new Carray(
  'Batman',
  'Superman',
  'Flash',
  'Spiderman',
  'Hulk',
  'The Thing',
  'Wonder woman',
  'Iron man',
  'Arrow'
);

var slicedSuperHeroes = superHeroes.slice(2, 6);

console.log(superHeroes);
console.log(slicedSuperHeroes);
// { 0: 'Flash', 1: 'Spiderman', 2: 'Hulk', 3: 'The Thing', length: 4 }

console.log('CASE 2: extract from object the values between index 2');

var slicedSuperHeroes2 = superHeroes.slice(2);

console.log(superHeroes);
console.log(slicedSuperHeroes2);
// {
//     0: 'Flash',
//     1: 'Spiderman',
//     2: 'Hulk',
//     3: 'The Thing'
//     4: 'Wonder woman',
//     5: 'Iron man',
//     6: 'Arrow',
//     length: 7
// }

console.log('CASE 3: extract all values from object');

var slicedSuperHeroes3 = superHeroes.slice();

console.log(superHeroes);
console.log(slicedSuperHeroes3);
// {
//     0: 'Batman',
//     1: 'Superman',
//     2: 'Flash',
//     3: 'Spiderman',
//     4: 'Hulk',
//     5: 'The Thing',
//     6: 'Wonder woman',
//     7: 'Iron man',
//     8: 'Arrow',

//     length: 9
// }

console.log('CASE 4: extract from object the values between index -7 and 6');

var slicedSuperHeroes4 = superHeroes.slice(-7, 6);

console.log(superHeroes);
console.log(slicedSuperHeroes4);
// { 0: 'Flash', 1: 'Spiderman', 2: 'Hulk', 3: 'The Thing', length: 4 }

console.log('CASE 5: extract from object the values between index 2 and -3');

var slicedSuperHeroes5 = superHeroes.slice(2, -3);

console.log(superHeroes);
console.log(slicedSuperHeroes5);
// { 0: 'Flash', 1: 'Spiderman', 2: 'Hulk', 3: 'The Thing', length: 4 }

console.log('##################### FUNCTION push ##################');
console.log('CASE 1: push one string');

var superHeroes = new Carray(
  'Batman',
  'Superman',
  'Flash',
  'Spiderman',
  'Hulk',
  'The Thing',
  'Wonder woman',
  'Iron man',
  'Arrow'
);

superHeroes.push('Mortadelo');

console.log(superHeroes);
// {
//     0: 'Batman',
//     1: 'Superman',
//     2: 'Flash',
//     3: 'Spiderman',
//     4: 'Hulk',
//     5: 'The Thing',
//     6: 'Wonder woman',
//     7: 'Iron man',
//     8: 'Arrow',
//     9: 'Mortadelo',

//     length: 10
// }

console.log('CASE 1: push two strings');

var superHeroes = new Carray(
  'Batman',
  'Superman',
  'Flash',
  'Spiderman',
  'Hulk',
  'The Thing',
  'Wonder woman',
  'Iron man',
  'Arrow'
);

superHeroes.push('Mortadelo', 'Filemon');

console.log(superHeroes);
// {
//     0: 'Batman',
//     1: 'Superman',
//     2: 'Flash',
//     3: 'Spiderman',
//     4: 'Hulk',
//     5: 'The Thing',
//     6: 'Wonder woman',
//     7: 'Iron man',
//     8: 'Arrow',
//     9: 'Mortadelo',
//     10: 'Filemon',

//     length: 11
// }

console.log('###################### FUNCTION EVERY ##################');

console.log('CASE 1: return true on all cities have length higher than 4');

var cities = new Carray(
  'Barcelona',
  'Madrid',
  'Sevilla',
  'Valencia',
  'Oviedo',
  'Pontevedra',
  'Caceres'
);

var isEveryHigherThan4 = cities.every(function (element) {
  return element.length > 4;
});

console.log(isEveryHigherThan4);
// true

console.log('CASE 2: return false on all cities have length higher than 6');

var isEveryHigherThan4 = cities.every(function (element) {
  return element.length > 6;
});

console.log(isEveryHigherThan4);
// false
