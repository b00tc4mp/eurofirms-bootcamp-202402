//implementar map
Array.prototype.mymap = function (callback) {
  const resultArray = [];
  for (let index = 0; index < this.length; index++) {
    resultArray.push(callback(this[index], index, this));
  }
  return resultArray;
};

var numbers = [10, 20, 30];

var output = numbers.mymap(function (val, index, array) {
  return val * 2;
});

console.log(output);

// ----------------
//debugger;

var myObject = {
    0: 10,
    1:20,
    2:30,
    3:40,
    length:4
}

for(var i = 0; i < myObject.length; i++){
    const property = myObject[i];
    console.log(property);
}