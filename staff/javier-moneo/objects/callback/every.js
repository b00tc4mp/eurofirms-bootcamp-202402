function every(object, callback) {
  for (var i = 0; i < object.length; i++) {
    if (!callback(object[i], i)) {
      return false;
    }
  }

  return true;
}

var callback = function (element, index) {
  return element < 40;
};

console.log('-------------EVERY-------------');

console.log('CASE 1: is below threshold');
var nums = {
  0: 1,
  1: 30,
  2: 39,
  3: 29,
  4: 10,
  5: 13,
  length: 6,
};

var outputEvery = every(nums, callback);

console.log(outputEvery);
// expected output: true
console.log('-----------------------------------');

console.log('CASE 1: is over threshold');
var nums = {
  0: 12,
  1: 5,
  2: 8,
  3: 130,
  4: 44,
  length: 5,
};

var outputEvery = every(nums, function (element, index) {
  return element >= 10;
});

console.log(outputEvery);
// expected output: false
console.log('-----------------------------------');

console.log('CASE 1: is over threshold');
var nums = {
  0: 12,
  1: 54,
  2: 18,
  3: 130,
  4: 44,
  length: 5,
};

var outputEvery = every(nums, function (element, index) {
  return element >= 10;
});

console.log(outputEvery);
// expected output: true
console.log('-----------------------------------');
