function join(object, separator = ',') {
  var resultString = '';
  for (var i = 0; i < object.length; i++) {
    if (i === object.length - 1) {
      resultString += object[i];
    } else {
      resultString += object[i] + separator;
    }
  }
  return resultString;
}

var elements = { 0: 'Fire', 1: 'Air', 2: 'Water', length: 3 };
console.log('JOIN');
console.log('Original');
console.log(elements);
console.log('---------------------------------------------');

console.log('Case1: join elements without separator by default');
console.log(join(elements));

console.log('---------------------------------------------');
console.log('Case2: join elements with separator " "');
console.log(join(elements, ' '));
console.log('---------------------------------------------');
console.log('Case3: join elements with separator "-"');
console.log(join(elements, '-'));
console.log('---------------------------------------------');

var cars = { 0: 'Peugeot', length: 1 };
console.log('Case4: join elements with separator "-"');
console.log(join(cars, '-'));
console.log('---------------------------------------------');
