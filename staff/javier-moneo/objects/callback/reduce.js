function reduce(object, callback, initValue) {
  var result = initValue === undefined ? object[0] : initValue;
  var index = initValue === undefined ? 1 : 0;
  
  for (var i = index; i < object.length; i++) {
    result = callback(result, object[i]);
  }
  return result;
}

var callbackReduce = function (accumulator, currentValue) {
  return accumulator + currentValue;
};

var nums = {
  0: 10,
  1: 20,
  2: 30,
  3: 40,
  length: 4,
};

console.log('--------------REDUCE--------------');
console.log('CASE 1: sum nums');
var outputReduce = reduce(nums, callbackReduce);
console.log(outputReduce);

console.log('CASE 1: sum nums + initial value to 1');
var outputReduce = reduce(nums, callbackReduce, 1);
console.log(outputReduce);
