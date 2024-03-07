function some(object, callback) {
  for (var i = 0; i < object.length; i++) {
    if (callback(object[i], i)) {
      return true;
    }
  }
  return false;
}

var callback = function (element, index) {
  return element % 2 === 0;
};

console.log('--------------SOME----------------');

var nums = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  length: 5,
};

console.log('CASE 1: checks whether an element is even');

var outputSome = some(nums, callback);

console.log(outputSome);

console.log('-------------------------------------');

var nums = {
  0: 2,
  1: 5,
  2: 8,
  3: 1,
  4: 4,
  length: 5,
};

console.log('CASE 2: checks whether an element is bigger than 10');

var outputSome = some(nums, function (element, index) {
  return element > 10;
});

console.log(outputSome);

console.log('-------------------------------------');

var nums = {
  0: 12,
  1: 5,
  2: 8,
  3: 1,
  4: 4,
  length: 5,
};

console.log('CASE 3: checks whether an element is bigger than 10');

var outputSome = some(nums, function (element, index) {
  return element > 10;
});

console.log(outputSome);
