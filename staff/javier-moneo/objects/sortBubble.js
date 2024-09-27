function sortBubble(object) {
  for (var i = 0; i < object.length - 1; i++) {
    if (object[i] > object[i + 1]) {
      var temp = object[i];
      object[i] = object[i + 1];
      object[i + 1] = temp;
    }
  }
  return object;
}

console.log("Case 1: sort with bubble method");

var nums = {
  0: 6,
  1: 3,
  2: 0,
  3: 5,
  length: 4,
};

var numsOriginal = { ...nums };
console.log("original");
console.log(numsOriginal);
console.log("shorted");
console.log(sortBubble(nums));
