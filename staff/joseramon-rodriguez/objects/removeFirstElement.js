/**
* Removes the first element from iterable object
and returns it.
*/
function removeFirstElement(object) {
    //TODO
    //guardar el primer elemento
    var deletedElement = object[0]
    //ajustar el resto de indices
    for (let i = 0; i < object.length - 1; i++) {
        object[i] = object[i + 1]
    }
    object.length--
    //quitar el primer elemento
    delete object[object.length]
    //devolver el primer elemento borrado
    return deletedElement
}

console.log('CASE 1: remove peugeot from cars and return it')

var cars = {
    0: 'peugeot',
    1: 'ford',
    2: 'renault',
    3: 'audi',
    4: 'bmv',
    5: 'mercedez',
    6: 'bentley',
    7: 'ferrari',

    length: 8
}

var firstCar = removeFirstElement(cars)

console.log(cars)
// 'peugeot'  

console.log(cars)

/*
{
    0:  'ford' ,
    1:  'renault' ,
    2:  'audi' ,
    3:  'bmv' , 
    4:  'mercedez' ,
    5:  'bentley' ,
    6:  'ferrari',

    length: 7
}
*/

console.log('CASE 2: remove 100 from nums and return it')

var nums = {
    0: 100,
    1: 200,
    2: 300,
    3: 400,
    4: 500,

    length: 5
}
var firstNum = removeFirstElement(nums)

console.log(firstNum)
//100

console.log(nums)
/*
  0: 200,
  1: 300,
  2: 400,
  3: 500,

  length: 4
}
*/