function slice(object, ini, end) {
  var resultObject = { length: 0 };

  for (var i = 0; i < end - ini; i++) {
    resultObject[i] = object[ini + i];
    resultObject.length++;
  }

  return resultObject;
}

var nombres = {
  0: "Rita",
  1: "Pedro",
  2: "Miguel",
  3: "Ana",
  4: "Vanesa",
};

console.log("CASE 1: slice elements from 1 to 3");

var sliced = slice(nombres, 1, 3);

console.log("sliced:");

console.log(sliced);

console.log("original:");
console.log(nombres);

var nums = {
  0: 100,
  1: 200,
  2: 300,
  3: 400,
  4: 500,

  length: 5,
};

console.log("CASE 2: slice elements from 2 to 3");

var numSliced = slice(nums, 2, 3);

console.log("numSliced:");

console.log(numSliced);

console.log("numOriginal:");
console.log(nums);
