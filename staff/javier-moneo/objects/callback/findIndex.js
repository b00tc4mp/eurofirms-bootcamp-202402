function findIndex(object, callback) {
  for (var i = 0; i < object.length; i++) {
    if (callback(object[i], i)) {
      return i;
    }
  }

  return -1;
}

var callback = function (element, index) {
  return element > 13;
};

var nums = {
  0: 5,
  1: 12,
  2: 8,
  3: 130,
  4: 44,
  length: 5,
};

console.log('-------------FIND-INDEX-------------');

var outputCallback = findIndex(nums, callback);

console.log(outputCallback);
