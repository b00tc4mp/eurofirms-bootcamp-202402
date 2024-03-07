function splice(object, start) {
  console.log(arguments);
  console.log(arguments.length);
}

console.log('------------------SPLICE--------------');

console.log('CASE 1: insert Feb at index 1');

var months = {
  0: 'Jan',
  1: 'March',
  2: 'April',
  3: 'June',
  length: 4,
};

var outputSplice = splice(months, 1, 0, 'Feb');
console.log(outputSplice);
// Expected output:
// var expected = {
//   0: 'Jan',
//   1: 'Feb',
//   2: 'March',
//   3: 'April',
//   4: 'June',
// };

console.log('--------------------------------------');

console.log('CASE 1: insert Feb at index 1');

var months = {
  0: 'Jan',
  1: 'March',
  2: 'April',
  3: 'June',
  length: 4,
};

var outputSplice = splice(months, 4, 1, 'May');
console.log(outputSplice);
// Expected output:
// var expected = {
//   0: 'Jan',
//   1: 'Feb',
//   2: 'March',
//   3: 'April',
//   4: 'May',
// };

console.log('--------------------------------------');
