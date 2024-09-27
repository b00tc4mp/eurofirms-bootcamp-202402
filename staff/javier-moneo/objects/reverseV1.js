function reverse(object) {
  for (var i = 0; i < Math.floor(object.length / 2); i++) {
    var valueStart = object[i];
    var valueEnd = object[object.length - i - 1];

    object[i] = valueEnd;
    object[object.length - i - 1] = valueStart;
  }

  return object;
}

var nombres = {
  0: "Rita",
  1: "Pedro",
  2: "Miguel",
  3: "Ana",
  4: "Vanesa",
  length: 5,
};

console.log("CASE 1: reverse elements");

console.log("original:");
console.log(nombres);

reverse(nombres);
console.log("reversed:");
console.log(nombres);

console.log("CASE 2: reverse elements");
var nums = {
  0: 10,
  1: 20,
  2: 30,
  3: 40,
  length: 4,
};
console.log("original:");
console.log(nums);

reverse(nums);
console.log("reversed:");
console.log(nums);
