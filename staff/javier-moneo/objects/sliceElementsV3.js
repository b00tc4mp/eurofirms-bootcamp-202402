function slice(object, start, end) {
  // TODO: falta corregir el comportamiento cuando pasamos stop 90 o -20
  var resultObject = { length: 0 };

  var stop = object.length - 1;

  if (start === undefined) {
    return resultObject;
  }

  if (start < 0) {
    start = start + object.length;
  }

  if (end !== undefined && end > 0) {
    stop = end - 1;
  }

  for (var index = start; index <= stop; index++) {
    resultObject[resultObject.length] = object[index];
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
  length: 5,
};

//---------------------------------------------------
console.log("CASE 0: slice elements from 1 to -20");

var sliced = slice(nombres, 1, -20);

console.log("sliced:");
console.log(sliced);
// 

console.log("original:");
console.log(nombres);
//{0: 'Rita', 1: 'Pedro', 2: 'Miguel', 3: 'Ana', 4: 'Vanesa', length: 5}

//---------------------------------------------------
console.log("CASE 1: slice elements from -10 to 3");

var sliced = slice(nombres, -10, 3);

console.log("sliced:");
console.log(sliced);
// 

console.log("original:");
console.log(nombres);
//{0: 'Rita', 1: 'Pedro', 2: 'Miguel', 3: 'Ana', 4: 'Vanesa', length: 5}

//---------------------------------------------------
console.log("CASE 2: slice elements from 1 to 3");

var sliced = slice(nombres, 1, 3);

console.log("sliced:");
console.log(sliced);
// {0: 'Pedro', 1: 'Miguel', length: 2}

console.log("original:");
console.log(nombres);
//{0: 'Rita', 1: 'Pedro', 2: 'Miguel', 3: 'Ana', 4: 'Vanesa', length: 5}

//---------------------------------------------------
console.log("CASE 3: slice elements from -2 without stop value");

sliced = slice(nombres, -2);

console.log("sliced:");
console.log(sliced);
//{0: 'Ana', 1: 'Vanesa', length: 2}

console.log("original:");
console.log(nombres);
//{0: 'Rita', 1: 'Pedro', 2: 'Miguel', 3: 'Ana', 4: 'Vanesa', length: 5}
//---------------------------------------------------
console.log("CASE 4: slice elements from -2 and stop -3");

sliced = slice(nombres, -2, -3);

console.log("sliced:");
console.log(sliced);
//{length: 0}

console.log("original:");
console.log(nombres);
//{0: 'Rita', 1: 'Pedro', 2: 'Miguel', 3: 'Ana', 4: 'Vanesa', length: 5}
//---------------------------------------------------

//---------------------------------------------------
console.log("CASE 5: slice elements from -3 and stop -1");

sliced = slice(nombres, -3, -1);

console.log("sliced:");
console.log(sliced);
//

console.log("original:");
console.log(nombres);
//{0: 'Rita', 1: 'Pedro', 2: 'Miguel', 3: 'Ana', 4: 'Vanesa', length: 5}
//---------------------------------------------------

var nums = {
  0: 100,
  1: 200,
  2: 300,
  3: 400,
  4: 500,

  length: 5,
};
//---------------------------------------------------

console.log("CASE 6: slice elements from 2 to 3");

var numSliced = slice(nums, 2, 3);

console.log("numSliced:");

console.log(numSliced);

console.log("numOriginal:");
console.log(nums);
//---------------------------------------------------
