/**
 * object, start, deleteCount, item1, item2, item3...
 * son opcionales todos menos object y start
 * @param {*} object objeto
 * @param {*} start indice donde se comienza a cambiar, se empiza desde 0
 * @param {*} deleteCount un entero indicando el número de elementos a eliminar del antiguo array
 */
function splice(object, start) {
  console.log('-----arguments-ini---------');
  console.log(arguments);
  console.log('-----arguments-end---------');
  console.log({ arugmentsLength: arguments.length });
  console.log({ deletecountPassedValue: arguments[2] });
  var removed = {
    length: 0,
  };
  // var deleteCount = 0;

  // if (arguments.length > 2) {
  //   // si pasamos el deleteCount
  //   console.log('deleteCount incluido');
  //   deleteCount = arguments[2];
  //   // TODO:???
  // }
  if (arguments[2] === 0 || arguments[2] < 0) {
    console.log('no se eliminará ningún elemento'); // en este caso se debe especificar un elemento nuevo
    // Este caso esta terminado y probado

    var valuesToInsertLength = arguments.length - 3;

    for (var i = object.length - 1; i >= start; i--) {
      //desplazamos
      object[i + valuesToInsertLength] = object[i];
    }

    for (var i = 3; i < arguments.length; i++) {
      object[start + (i - 3)] = arguments[i];

      object.length++;
    }
    return removed;
  } else if (arguments.length < 3 || arguments[2] > object.length - start) {
    console.log('deleteCount omitido o su valor es mayor que object.length');
    // eliminamos todos los elementos desde start hasta el final del array
    // Este caso esta terminado y probado
    for (var i = start; i < object.length; i++) {
      removed[removed.length] = object[i];
      removed.length++;
      delete object[i];
    }
    object.length = object.length - start;
    return removed;
  } else {
    console.log('deleteCount incluido');
    // deleteCount puede tener valor positivo o negativo

    if (arguments.length < 4) {
      console.log('sin items');
      // si no incluimos ningún item a añadir
      // Desde la posicion start eliminamos n elementos
      // TODO: falta comprobar el caso en que sea negativo arguments[2]
      // TODO: Ojo por que eliminamos pero los indices del objeto siguen igual
      var startCalculated = start > 0 ? start : object.length + start;
      for (var i = startCalculated; i < object.length - arguments[2]; i++) {
        removed[removed.length] = object[i];
        removed.length++;
        delete object[i];
      }
      object.length = object.length - removed.length;
      return removed;
    } else {
      console.log('con items');
      // si tenemos todos los parametros e items
      // TODO:
    }
  }

  // a continuación es el codigo del insert elements
  // var valuesToInsertLength = arguments.length - 3;

  // for (var i = object.length - 1; i >= index; i--) {
  //   object[i + valuesToInsertLength] = object[i];
  // }

  // for (var i = 3; i < arguments.length; i++) {
  //   object[index + (i - 2)] = arguments[i];

  //   object.length++;
  // }
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

console.log('CASE 2: insert May at index 4');

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

console.log('CASE: Eliminar todos los elementos tras el índice 2 (incl.)');

var myFish = {
  0: 'angel',
  1: 'clown',
  2: 'mandarin',
  3: 'sturgeon',
  length: 4,
};

var outputSplice = splice(myFish, 2);
console.log({ myFish });
console.log({ outputSplice });
// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]
console.log('--------------------------------------');

console.log('CASE: Eliminar 0 elementos desde el índice 2 e insertar "drum"');

var myFish = {
  0: 'angel',
  1: 'clown',
  2: 'mandarin',
  3: 'sturgeon',
  length: 4,
};

var outputSplice = splice(myFish, 2, 0, 'drum');
console.log({ myFish });
console.log({ outputSplice });
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed
console.log('--------------------------------------');

console.log('CASE: Eliminar 1 elemento desde el índice 3');

var myFish = {
  0: 'angel',
  1: 'clown',
  2: 'drum',
  3: 'mandarin',
  4: 'sturgeon',
  length: 5,
};

var outputSplice = splice(myFish, 3, 1);
console.log({ myFish });
console.log({ outputSplice });
// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"]
console.log('--------------------------------------');
