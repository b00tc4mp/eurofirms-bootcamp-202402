/**
 * Removes elements specified by index and count from iterable object and returns them.
 */
function removeElements(object, index, count) {
  // guardo los elementos que se eliminaran en una variable
  // muevo los elementos del objeto count veces hacia la izquierda pisando los elementos a eliminar
  // borro los ultimos count elementos del objeto que quedaran repetidos

  var deletedElements = { length: 0 };

  var objectLength = object.length; // 8
  for (var i = index; i < objectLength; i++) {
    // si i esta en el rango del indice de los elementos que se eliminaran,
    // tomo esos elementos y los guardo en mi objeto deletedElements
    if (i >= index && i < index + count) {
      deletedElements[deletedElements.length] = object[i];
      deletedElements.length++;
    }

    // si la condicion anterior no se cumple, tomo el elemento actual del bucle y
    // piso el que este a count elementos a la izquierda
    else {
      object[i - count] = object[i];
    }

    // evaluo si me encuentro en los elementos que quedaran repetidos,
    // de ser asi, los voy eliminando del objeto final y modifico el length
    if (i >= objectLength - count) {
      delete object[i];
      object.length--;
    }
  }

  return deletedElements;
}

console.log("CASE 1: remove at index 3, 2 elments from cars");

var cars = {
  0: "peugeot",
  1: "ford",
  2: "renault",
  3: "audi",
  4: "bmw",
  5: "mercedez",
  6: "bentley",
  7: "ferrari",
  length: 8,
};

var removed = removeElements(cars, 3, 2);

console.log(removed);
/*
{ 
    0: 'audi',
    1: 'bmw',
    length: 2
}
*/

console.log(cars);
/*
{
    0: 'peugeot',
    1: 'ford',
    2: 'renault',
    3: 'mercedez',
    4: 'bentley',
    5: 'ferrari',
    length: 6
}
*/

console.log("CASE 2: remove at index 1, 3 elements from nums");

var nums = {
  0: 100,
  1: 200,
  2: 300,
  3: 400,
  4: 500,
  length: 5,
};

var removed = removeElements(nums, 1, 3);

console.log(removed);
/*
{
    0: 200,
    1: 300,
    2: 400,
    length: 3
}
*/

console.log(nums);
/*
{
    0: 100,
    1: 500,
    length: 2
}
*/
