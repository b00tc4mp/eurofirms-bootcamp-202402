function includes(object, value, fromIndex) {
  if (fromIndex !== undefined && fromIndex >= object.length) {
    return false;
  }

  if (object.length === 0) {
    return false;
  }

  var k;
  if (fromIndex === undefined) {
    k = 0;
  } else {
    k = fromIndex >= 0 ? fromIndex : Math.max(0, object.length + fromIndex);
  }

  for (var i = k; i < object.length; i++) {
    if (object[i] === value) {
      return true;
    }
  }

  return false;
}

var cities = {
  0: 'Madrid',
  1: 'Barcelona',
  2: 'Valencia',
  3: 'Tokyo',
  4: 'Santiago',
  5: 'Manchester',
  6: 'Lima',
  7: 'Sevilla',

  length: 8,
};
console.log('FUNCTION INCLUDES');

console.log('CASE 1: return true when search for Tokyo on the object');

var result = includes(cities, 'Tokyo');

console.log(result);

console.log('Case 2: return false when seach for Liverpool on the object');

var result = includes(cities, 'Liverpool');

console.log({ result });

console.log(
  'Case 3: return false when seach for Liverpool on the object, at posisition 3'
);

var result = includes(cities, 'Liverpool', 3);

console.log({ result });

console.log(
  'Case 3: return true when seach for Santiago on the object, at posisition 3'
);

var result = includes(cities, 'Santiago', 3);

console.log({ result });

console.log('-----------------------------------');
console.log('CHARS');
var myChars = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};

console.log('CASE 3: Computed index is less than 0');

console.log(includes(myChars, 'a', -100)); // true
console.log(includes(myChars, 'b', -100)); // true
console.log(includes(myChars, 'c', -100)); // true
console.log(includes(myChars, 'a', -2)); // false
