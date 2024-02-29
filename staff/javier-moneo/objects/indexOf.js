function indexOf(object, value, fromIndex) {
  if (fromIndex !== undefined && fromIndex >= object.length) {
    return -1;
  }

  if (object.length === 0) {
    return -1;
  }

  var k;
  if (fromIndex === undefined) {
    k = 0;
  } else {
    k = fromIndex >= 0 ? fromIndex : Math.max(0, object.length + fromIndex);
  }

  for (var i = k; i < object.length; i++) {
    if (object[i] === value) {
      return i;
    }
  }

  return -1;
}

var beasts = {
  0: 'ant',
  1: 'bison',
  2: 'camel',
  3: 'duck',
  4: 'bison',
  length: 5,
};

console.log('INDEXOF');
console.log('------------------------------------------');
console.log('CASE 1: indexOf on beast object');
console.log(indexOf(beasts, 'bison'));
// Expected output: 1

// Start from index 2
console.log(indexOf(beasts, 'bison', 2));
// Expected output: 4

console.log(indexOf(beasts, 'giraffe'));
// Expected output: -1
console.log('------------------------------------------');

var nums = {
  0: 2,
  1: 9,
  2: 9,
  length: 3,
};

console.log('------------------------------------------');
console.log('CASE 1: indexOf on nums object');
console.log(indexOf(nums, 2));
// Expected output: 0

console.log(indexOf(nums, 7));
// Expected output: -1

console.log(indexOf(nums, 9, 2));
// Expected output: 2

console.log(indexOf(nums, 2, -1));
// Expected output: -1
console.log(indexOf(nums, 2, -3));
// Expected output: 0
console.log('------------------------------------------');

var nums2 = {
  0: NaN,
  length: 1,
};
console.log('------------------------------------------');
console.log('CASE 1: indexOf of NaN on nums2 object');
console.log(indexOf(nums, NaN));
// Expected output: -1

console.log('------------------------------------------');
